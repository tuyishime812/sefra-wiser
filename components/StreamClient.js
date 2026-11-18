"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AUDIO_FREE, epTracks } from "../lib/data";

export default function StreamClient() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  function notify(msg) {
    setToast(msg);
  }

  function toggleFree() {
    if (!AUDIO_FREE) {
      notify("Free track audio coming soon");
      return;
    }
    if (!audioRef.current) {
      const a = new Audio(AUDIO_FREE);
      a.ontimeupdate = () => {
        if (!a.duration) return;
        setProgress((a.currentTime / a.duration) * 100);
      };
      a.onended = () => {
        setPlaying(false);
        setProgress(0);
      };
      audioRef.current = a;
    }
    const a = audioRef.current;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => notify("Unable to play audio"));
    } else {
      a.pause();
      setPlaying(false);
    }
  }

  return (
    <div>
      <p className="muted" style={{ marginTop: 0 }}>
        Track 1 is free for everyone. Purchase the EP to unlock the rest.
      </p>
      <div>
        {epTracks.map((t, i) => {
          const isFree = t.access === "free";
          return (
            <div className="track" key={t.title}>
              <button
                className={`play-btn ${isFree ? "" : "secondary"}`}
                onClick={isFree ? toggleFree : () => notify("Buy the EP to unlock this track")}
                aria-label={isFree ? (playing ? "Pause Life Is Better" : "Play Life Is Better") : `Locked: ${t.title}`}
              >
                {isFree ? (playing ? "❚❚" : "▶") : "🔒"}
              </button>
              <span className="num">{i + 1}</span>
              <span className="meta">
                <strong>{t.title}</strong>
                <small>{t.artist}</small>
              </span>
              <span className={`pill ${isFree ? "" : "locked"}`}>{isFree ? "Free" : "Buy to unlock"}</span>
            </div>
          );
        })}
      </div>
      <div className="progress" aria-hidden="true"><i style={{ width: `${progress}%` }} /></div>
      <div className="btn-row">
        <Link className="btn" href="/buy">Unlock Full EP</Link>
      </div>
      {toast ? <div className="toast" role="status">{toast}</div> : null}
    </div>
  );
}
