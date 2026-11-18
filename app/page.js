import Image from "next/image";
import Link from "next/link";
import Countdown from "../components/Countdown";
import { release } from "../lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="stripes" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">New EP · Hip-Hop · Malawi</p>
            <h1>22ND<br />Adidas EP</h1>
            <p style={{ fontSize: "1.35rem", margin: "0.75rem 0 0.25rem" }}>{release.artist}</p>
            <p className="eyebrow" style={{ marginTop: 0 }}>Out {release.date}</p>
            <Countdown dateISO={release.dateISO} />
            <div className="btn-row">
              <Link className="btn" href="/buy">Pre-order EP</Link>
              <Link className="btn secondary" href="/listen">Stream free track</Link>
            </div>
          </div>
          <div className="cover-wrap">
            <Image src="/cover.jpg" alt="22ND Adidas EP cover art" width={900} height={900} priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Explore the release</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem" }}>Everything in one place</h2>
          <div className="grid cards">
            <div className="card">
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Listen</h3>
              <p className="muted">Stream the free track now and preview what’s coming on the EP.</p>
              <div className="btn-row"><Link className="btn small" href="/listen">Go to Listen</Link></div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Buy</h3>
              <p className="muted">Pre-order the standard EP or pick up the Director’s Cut edition.</p>
              <div className="btn-row"><Link className="btn small" href="/buy">Go to Buy</Link></div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Deluxe</h3>
              <p className="muted">Discover the 5-track Director’s Cut with featured collaborators.</p>
              <div className="btn-row"><Link className="btn small" href="/deluxe">View Deluxe</Link></div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Details</h3>
              <p className="muted">Credits, genre, language, producers, and official release information.</p>
              <div className="btn-row"><Link className="btn small" href="/details">Release Details</Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
