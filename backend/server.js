import express from "express";
import fetch from "node-fetch";
import cors from "cors";

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
