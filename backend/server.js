import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const AMADEUS_CLIENT_ID = process.env.AMADEUS_CLIENT_ID;
const AMADEUS_CLIENT_SECRET = process.env.AMADEUS_CLIENT_SECRET;
const AMADEUS_BASE = "https://api.amadeus.com";

let tokenCache = {
  accessToken: null,
  expiresAt: 0,
};

async function getAccessToken() {
  if (
    tokenCache.accessToken &&
    Date.now() < tokenCache.expiresAt
  ) {
    return tokenCache.accessToken;
  }

  const res = await fetch(`${AMADEUS_BASE}/v1/security/oauth2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: AMADEUS_CLIENT_ID,
      client_secret: AMADEUS_CLIENT_SECRET,
    }),
  });

  const data = await res.json();

  tokenCache.accessToken = data.access_token;
  tokenCache.expiresAt = Date.now() + data.expires_in * 1000;

  return tokenCache.accessToken;
}

/**
 * HOTEL SEARCH
 * /api/hotels/search?city=PAR&checkIn=2025-02-10&checkOut=2025-02-15&adults=2
 */
app.get("/api/hotels/search", async (req, res) => {
  try {
    const { city, checkIn, checkOut, adults = 2 } = req.query;
    const token = await getAccessToken();

    // 1) hotelIds by city
    const hotelsRes = await fetch(
      `${AMADEUS_BASE}/v1/reference-data/locations/hotels/by-city?cityCode=${city}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const hotelsJson = await hotelsRes.json();

    const hotelIds = (hotelsJson?.data || [])
      .slice(0, 10)
      .map(h => h.hotelId)
      .join(",");

    if (!hotelIds) {
      return res.json({ data: [] });
    }

    // 2) offers by hotelIds (v3)
    const offersUrl =
      `${AMADEUS_BASE}/v3/shopping/hotel-offers` +
      `?hotelIds=${hotelIds}` +
      `&checkInDate=${checkIn}` +
      `&checkOutDate=${checkOut}` +
      `&adults=${adults}`;

    const offersRes = await fetch(offersUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const offersJson = await offersRes.json();

    res.json(offersJson);
  } catch (e) {
    console.error("AMADEUS ERROR:", e);
    res.status(500).json({ error: "Amadeus search failed", details: e?.message || e });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Safe Journey API running on ${PORT}`)
);

const TRAVELPORT_AUTH_URL =
  process.env.TRAVELPORT_AUTH_URL ||
  "https://auth.pp.travelport.net/oauth/token";
const TRAVELPORT_AIR_BASE =
  process.env.TRAVELPORT_AIR_BASE ||
  "https://api.pp.travelport.net/11/air";
const TRAVELPORT_PCC = process.env.TRAVELPORT_PCC || "7K99_1G";

let tpTokenCache = {
  accessToken: null,
  expiresAt: 0,
};

async function getTravelportToken() {
  if (tpTokenCache.accessToken && Date.now() < tpTokenCache.expiresAt) {
    return tpTokenCache.accessToken;
  }

  const res = await fetch(TRAVELPORT_AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.TRAVELPORT_CLIENT_ID,
      client_secret: process.env.TRAVELPORT_CLIENT_SECRET,
      username: process.env.TRAVELPORT_USERNAME,
      password: process.env.TRAVELPORT_PASSWORD,
      grant_type: "password",
    }),
  });

  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(data.error_description || data.error || "Travelport auth failed");
  }

  tpTokenCache.accessToken = data.access_token;
  tpTokenCache.expiresAt = Date.now() + (data.expires_in - 60) * 1000;
  return tpTokenCache.accessToken;
}

/**
 * FLIGHT SEARCH
 * POST /api/flights/search
 * { "from": "DUB", "to": "WAW", "date": "2026-11-10", "adults": 1 }
 */
app.post("/api/flights/search", async (req, res) => {
  try {
    const { from, to, date, adults = 1 } = req.body || {};
    if (!from || !to || !date) {
      return res.status(400).json({ error: "from, to and date are required" });
    }

    const token = await getTravelportToken();

    const body = {
      "@type": "CatalogProductOfferingsQueryRequest",
      CatalogProductOfferingsRequest: {
        "@type": "CatalogProductOfferingsRequestAir",
        maxNumberOfUpsellsToReturn: 4,
        PassengerCriteria: [
          {
            "@type": "PassengerCriteria",
            number: Number(adults) || 1,
            passengerTypeCode: "ADT",
          },
        ],
        SearchCriteriaFlight: [
          {
            "@type": "SearchCriteriaFlight",
            departureDate: date,
            From: { value: String(from).toUpperCase() },
            To: { value: String(to).toUpperCase() },
          },
        ],
      },
    };

    const searchRes = await fetch(
      `${TRAVELPORT_AIR_BASE}/catalog/search/catalogproductofferings`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept-Encoding": "gzip, deflate",
          Accept: "application/json",
          "TVP-PCC-Core": TRAVELPORT_PCC,
          TraceId: `sjc-${Date.now()}`,
        },
        body: JSON.stringify(body),
      }
    );

    const json = await searchRes.json();
    if (!searchRes.ok) {
      return res.status(searchRes.status).json({
        error: "Travelport search failed",
        details: json,
      });
    }

    res.json(json);
  } catch (e) {
    console.error("TRAVELPORT ERROR:", e);
    res.status(500).json({
      error: "Travelport search failed",
      details: e?.message || String(e),
    });
  }
});