export default function VitrinePage() {
  return (
    <div className="sj-vitrine-shot">
<header className="sj-vitrine-realnav">
  <a href="/club#overview">Overview</a>
  <a href="/club#esim">eSIM</a>
  <a href="/club#stays">Stays</a>
  <a href="/club#membership">Membership</a>
  <a href="/club?signin=1">Sign in</a>
  <a href="/club?join=1" className="sj-vitrine-realjoin">Join the Club</a>
</header>

      <img src="/vitrine.jpg" alt="Safe Journey Club" />

      <a className="sj-vitrine-enter" href="/club?join=1">
  Enter the club
</a>
    </div>
  );
}
