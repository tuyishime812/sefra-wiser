"use client";

import { useEffect, useState } from "react";

export default function CheckoutModal({ open, product, onClose, onSuccess }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("Airtel Money");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setEmail("");
      setPhone("");
      setMethod("Airtel Money");
      setError("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !product) return null;

  function pay(e) {
    e.preventDefault();
    if (!email.trim()) {
      setError("Enter your email");
      return;
    }
    onClose();
    if (onSuccess) onSuccess();
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Checkout" onClick={(e) => e.stopPropagation()}>
        <p className="eyebrow">Checkout</p>
        <h2>{product.name}</h2>
        <div className="price">MWK {product.price.toLocaleString("en-US")}</div>
        <form onSubmit={pay}>
          <div className="field">
            <label htmlFor="email">Email (download link sent here)</label>
            <input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }} placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="method">Pay with</label>
            <select id="method" value={method} onChange={(e) => setMethod(e.target.value)}>
              <option>Airtel Money</option>
              <option>TNM Mpamba</option>
              <option>Card</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+265 …" />
          </div>
          {error ? <p style={{ color: "#ff8a8a", margin: "0.75rem 0 0", fontSize: "0.9rem" }}>{error}</p> : null}
          <div className="btn-row">
            <button className="btn" type="submit">Pay now</button>
            <button className="btn secondary" type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
