"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { deluxeTracks, products } from "../lib/data";
import CheckoutModal from "./CheckoutModal";

export default function BuyExperience() {
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <>
      <div className="grid cards">
        <div className="card">
          <p className="eyebrow">Standard</p>
          <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{products.ep.name}</h2>
          <p className="muted" style={{ marginTop: 0 }}>{products.ep.note}</p>
          <div className="price">MWK {products.ep.price.toLocaleString("en-US")}</div>
          <button className="btn" onClick={() => setSelected(products.ep)}>Buy EP</button>
        </div>
        <div className="card">
          <p className="eyebrow">Director’s Cut</p>
          <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>22ND Deluxe</h2>
          <p className="muted" style={{ marginTop: 0 }}>{products.deluxe.note}</p>
          <div className="price">MWK {products.deluxe.price.toLocaleString("en-US")}</div>
          <div className="btn-row">
            <button className="btn" onClick={() => setSelected(products.deluxe)}>Buy Deluxe</button>
            <Link className="btn secondary" href="/deluxe">View Deluxe</Link>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Deluxe track list</h2>
        <div>
          {deluxeTracks.map((t, i) => (
            <div className="track" key={t.title}>
              <span className="num">{i + 1}</span>
              <span className="meta">
                <strong>{t.title}</strong>
                <small>{t.feature || "Sefra Wiser"}</small>
              </span>
              <span className="pill locked">Deluxe</span>
            </div>
          ))}
        </div>
      </div>

      <CheckoutModal
        open={!!selected}
        product={selected}
        onClose={() => setSelected(null)}
        onSuccess={() => setToast("Demo checkout – connect a payment provider")}
      />
      {toast ? <div className="toast" role="status">{toast}</div> : null}
    </>
  );
}
