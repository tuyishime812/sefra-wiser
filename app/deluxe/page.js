import DeluxeExperience from "../../components/DeluxeExperience";

export const metadata = {
  title: "Deluxe",
  description: "22ND Deluxe – Director’s Cut by Sefra Wiser. Track list, features, and purchase.",
};

export default function DeluxePage() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Director’s Cut</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", marginBottom: "1rem" }}>22ND Deluxe</h1>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          An extended edition featuring Gbrain, Notch Crismo, Theo Angels, and Vedastar.
        </p>
        <DeluxeExperience />
      </div>
    </section>
  );
}
