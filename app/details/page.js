import { release } from "../../lib/data";

export const metadata = {
  title: "Details",
  description: "Official release details, credits, and metadata for 22ND Adidas EP by Sefra Wiser.",
};

const rows = [
  ["Album title", release.title],
  ["Artist", release.artist],
  ["Release type", release.type],
  ["Genre", release.genre],
  ["Language", release.language],
  ["Label", release.label],
  ["Release date", release.date],
  ["Territory", release.territory],
  ["Country of origin", release.country],
  ["Producers", release.producers],
  ["© Copyright", release.copyright],
  ["℗ Master", release.phonographic],
  ["UPC/EAN", release.upc],
  ["ISRCs", release.isrc],
];

export default function DetailsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Release information</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", marginBottom: "1rem" }}>Details</h1>
        <div className="card">
          <dl className="details-grid">
            {rows.map(([k, v]) => (
              <div key={k} style={{ display: "contents" }}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
