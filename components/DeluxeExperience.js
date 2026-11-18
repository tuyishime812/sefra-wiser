"use client";

import { useEffect, useState } from "react";
import { deluxeTracks, products } from "../lib/data";
import CheckoutModal from "./CheckoutModal";

export default function DeluxeExperience() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <>
      <div className="grid cards" style={{ alignItems: "start" }}>
        <div className="card">
          <p className="eyebrow">Director’s Cut</p>
          <h2 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>22ND Deluxe</h2>
          <p className="muted" style={{ marginTop: 0 }}>{products.deluxe.note}</p>
          <div className="price">MWK {products.deluxe.price.toLocaleString("en-US")}</div>
          <button className="btn" onClick={() => setOpen(true)}>Buy Deluxe</button>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontFamily: "Impact, sans-serif", textTransform: "uppercase" }}>Track list</h3>
          <div>
            {deluxeTracks.map((t, i) => (
              <div className="track" key={t.title}>
                <span className="num">{i + 1}</span>
                <span className="meta">
                  <strong>{t.title}</strong>
                  <small>{t.feature || "Sefra Wiser"}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CheckoutModal
        open={open}
        product={products.deluxe}
        onClose={() => setOpen(false)}
        onSuccess={() => setToast("Demo checkout – connect a payment provider")}
      />
      {toast ? <div className="toast" role="status">{toast}</div> : null}
    </>
  );
}
