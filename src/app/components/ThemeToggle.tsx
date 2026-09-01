"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try { localStorage.setItem("oddbatch-theme", next ? "dark" : "light"); } catch { /* noop */ }
  }

  return (
    <button
      className={className}
      onClick={toggle}
      type="button"
      aria-label="Toggle colour theme"
      suppressHydrationWarning
    >
      {dark ? "light" : "dark"}
    </button>
  );
}
