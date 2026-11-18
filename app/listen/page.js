import StreamClient from "../../components/StreamClient";

export const metadata = {
  title: "Listen",
  description: "Stream tracks from Sefra Wiser's 22ND Adidas EP.",
};

export default function ListenPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Stream</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", marginBottom: "1rem" }}>Listen</h1>
        <div className="card">
          <StreamClient />
        </div>
      </div>
    </section>
  );
}
