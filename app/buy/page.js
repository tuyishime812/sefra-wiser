import BuyExperience from "../../components/BuyExperience";

export const metadata = {
  title: "Buy",
  description: "Pre-order the 22ND Adidas EP or get the Director’s Cut deluxe edition.",
};

export default function BuyPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Get the music</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", marginBottom: "1rem" }}>Buy</h1>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          Choose the standard EP for the core release or the Director’s Cut for an extended track list and featured collaborations.
        </p>
        <BuyExperience />
      </div>
    </section>
  );
}
