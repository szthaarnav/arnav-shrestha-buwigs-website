import { useState } from "react";

// ── DROP YOUR IMAGES IN src/assets/ AND UPDATE THESE PATHS ──
import itunesImg from "./assets/itunes.jpg";
import pubgImg from "./assets/pubg.jpg";
import freefireImg from "./assets/freefire.jpg";
import valorantImg from "./assets/valorant.jpg";
import spidermanImg from "./assets/spiderman.jpg";
import sekiroImg from "./assets/sekiro.jpg";
import godofwarImg from "./assets/godofwar.jpg";
import tekkenImg from "./assets/tekken.jpg";
import fcImg from "./assets/fc24.jpg";

const BG = "#0a0a0a";
const SURFACE = "#141414";
const BORDER = "#222222";
const ACCENT = "#00d4aa";

const products = {
  giftcards: [
    { id: 1, title: "iTunes Giftcard",   price: "NRP 800.00",    tag: "Giftcard", accent: "#4a90d9", img: itunesImg },
    { id: 2, title: "PUBG UC",           price: "NRP 1,200.00",  tag: "Giftcard", accent: "#f5a623", img: pubgImg },
    { id: 3, title: "FreeFire Diamond",  price: "NRP 600.00",    tag: "Giftcard", accent: "#f04e23", img: freefireImg },
    { id: 4, title: "Valorant Giftcard", price: "NRP 2,200.00",  tag: "Giftcard", accent: "#ff4655", img: valorantImg },
  ],
  games: [
    { id: 5, title: "Spiderman Miles Morales", price: "NRP 800.00",    tag: "Giftcard", accent: "#e63946", img: spidermanImg },
    { id: 6, title: "Sekiro Shadow Die Twice", price: "NRP 7,500.00",  tag: "Giftcard", accent: "#ffd700", img: sekiroImg },
    { id: 7, title: "God of War Ragnarok",     price: "NRP 8,500.00",  tag: "Giftcard", accent: "#4fc3f7", img: godofwarImg },
    { id: 8, title: "Tekken 8",                price: "NRP 12,000.00", tag: "Giftcard", accent: "#ff6b35", img: tekkenImg },
  ],
};

const navLinks = ["Discovery", "Browse", "News"];

const ArrowBtns = () => (
  <div style={{ display: "flex", gap: 8 }}>
    {["‹", "›"].map((a) => (
      <button key={a} style={{
        background: "#1a1a1a", border: `1px solid ${BORDER}`, color: "#f0f0f0",
        width: 32, height: 32, borderRadius: 8, cursor: "pointer", fontSize: 16,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>{a}</button>
    ))}
  </div>
);

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: 12, overflow: "hidden",
        height: 280, cursor: "pointer",
        border: `2px solid ${hovered ? product.accent : "transparent"}`,
        transition: "border-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        background: "#111",
      }}
    >
      <img
        src={product.img}
        alt={product.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      <span style={{
        position: "absolute", top: 8, left: 8,
        fontSize: 10, fontWeight: 600, letterSpacing: 1,
        background: "rgba(0,0,0,0.65)", color: "#bbb",
        padding: "2px 8px", borderRadius: 4, textTransform: "uppercase",
      }}>
        {product.tag}
      </span>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
        padding: "40px 12px 12px",
      }}>
        <p style={{ margin: "0 0 3px", fontSize: 14, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
          {product.title}
        </p>
        <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: ACCENT }}>
          {product.price}
        </p>
      </div>
    </div>
  );
};

const LogoBadge = ({ dark }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    background: dark ? "#fff" : "#1e1e1e",
    color: dark ? "#000" : "#fff",
    padding: "7px 16px", borderRadius: 9,
    border: dark ? "none" : `1px solid ${BORDER}`,
    fontWeight: 700,
  }}>
    <span style={{ fontSize: 18 }}>🎮</span>
    <div style={{ lineHeight: 1.2 }}>
      <div style={{ fontSize: 13, fontWeight: 700 }}>JM</div>
      <div style={{ fontSize: 10, fontWeight: 400, opacity: 0.7 }}>Store</div>
    </div>
  </div>
);

export default function GameStore() {
  const [activeNav, setActiveNav] = useState("Discovery");
  const [search, setSearch] = useState("");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: "#f0f0f0", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{
        background: SURFACE, borderBottom: `1px solid ${BORDER}`,
        padding: "0 32px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 60,
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <LogoBadge dark={false} />
        <input
          style={{
            flex: 1, maxWidth: 440, margin: "0 32px",
            background: "#1a1a1a", border: `1px solid ${BORDER}`,
            borderRadius: 24, padding: "8px 18px",
            color: "#f0f0f0", fontSize: 14, outline: "none", width: "100%",
          }}
          placeholder="Search store..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button style={{ background: "none", border: "none", color: "#f0f0f0", fontSize: 20, cursor: "pointer" }}>🛒</button>
          <button style={{
            background: "#1e1e1e", border: `1px solid ${BORDER}`,
            color: "#f0f0f0", padding: "7px 18px", borderRadius: 8,
            fontSize: 14, cursor: "pointer", fontWeight: 500,
          }}>Sign in</button>
        </div>
      </nav>

      {/* SUB NAV */}
      <div style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}`, padding: "0 32px", display: "flex", gap: 32 }}>
        {navLinks.map((link) => (
          <button key={link} onClick={() => setActiveNav(link)} style={{
            color: activeNav === link ? ACCENT : "#888",
            fontSize: 14, padding: "14px 0", cursor: "pointer",
            border: "none", background: "none", fontFamily: "inherit",
            borderBottom: activeNav === link ? `2px solid ${ACCENT}` : "2px solid transparent",
          }}>
            {link}
          </button>
        ))}
      </div>

      {/* MAIN */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>

        {/* Hero */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, marginBottom: 48 }}>
          <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 300 }}>
            <img src={fcImg} alt="FC24" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, transparent 100%)",
              display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 32,
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: "uppercase", margin: "0 0 8px" }}>Featured</p>
              <h1 style={{ fontSize: 32, fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2 }}>EA Sports FC 24</h1>
            </div>
          </div>

          <div style={{
            background: SURFACE, border: `1px solid ${BORDER}`,
            borderRadius: 16, padding: 28,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <div style={{
                width: 48, height: 48, borderRadius: 10, background: "#1e1e1e",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, marginBottom: 16,
              }}>⚽</div>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>EA Sports FC 24</p>
              <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6, marginBottom: 20 }}>
                What happens when two iconic football brands come together? A one-of-a-kind experience
                that takes football to places it's never been before.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button style={{
                background: ACCENT, color: "#0d1a14", border: "none",
                borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer",
              }}>Buy Now</button>
              <button style={{
                background: "none", color: "#aaa", border: `1px solid ${BORDER}`,
                borderRadius: 8, padding: "10px 18px", fontSize: 14, cursor: "pointer",
              }}>＋ Wishlist</button>
            </div>
          </div>
        </div>

        {/* Gift Cards */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: 0 }}>Top choices</h2>
          <ArrowBtns />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 48 }}>
          {products.giftcards.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* Games */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: 0 }}>Games</h2>
          <ArrowBtns />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 48 }}>
          {products.games.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </main>

      {/* LOGO DIVIDER */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px 0",
        borderTop: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
        background: BG,
      }}>
        <LogoBadge dark={true} />
      </div>

      {/* FOOTER */}
      <footer style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, padding: "40px 32px 24px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginBottom: 32,
        }}>
          {/* Col 1 */}
          <div>
            <p style={{ fontSize: 12, color: "#444", lineHeight: 1.8, margin: "0 0 14px" }}>
              JM Store © 2022 – 2024 An affiliate<br />with RajMaskey & AshinNeupane
            </p>
            <div style={{ marginBottom: 14 }}>
              <LogoBadge dark={true} />
            </div>
            <p style={{ fontSize: 12, color: "#444", lineHeight: 1.8, margin: 0 }}>
              JM Store Inc © 2022 – 2023<br />An Raj's Company.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            {[
              { icon: "📍", text: "Biratnagar 5, Pokhara 17, Nepal" },
              { icon: "📞", text: "+977 9822789260" },
              { icon: "✉️", text: "contact@rajmaskey.com.np", accent: true },
            ].map((item) => (
              <div key={item.text} style={{
                display: "flex", gap: 10, alignItems: "flex-start",
                marginBottom: 14, fontSize: 13,
                color: item.accent ? ACCENT : "#777",
              }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Col 3 */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>About us</p>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, margin: "0 0 16px" }}>
              JMGStore or ParcelNepal is Nepal based digital marketplace that specializes
              in the sale of videogames, game-keys, and gaming-related products.
            </p>
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              {["f", "𝕏", "in", "gh"].map((s) => (
                <div key={s} style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "#1e1e1e", border: `1px solid ${BORDER}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", fontSize: 12, fontWeight: 700, color: "#ccc",
                }}>
                  {s}
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#444", marginBottom: 14 }}>
              See our reviews on ⭐ <span style={{ color: ACCENT }}>Trustpilot</span>
            </p>
            <div style={{
              background: "#1a1a1a", border: `1px solid ${BORDER}`,
              borderRadius: 10, padding: "10px 16px",
              display: "inline-flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ fontSize: 20 }}>🟩</span>
              <div>
                <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "#76b900" }}>NVIDIA</p>
                <p style={{ margin: 0, fontSize: 10, color: "#555" }}>Inception Program</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: 1200, margin: "0 auto",
          borderTop: `1px solid ${BORDER}`, paddingTop: 20,
          fontSize: 12, color: "#333", textAlign: "center",
        }}>
          © 2024 JM Store — All rights reserved
        </div>
      </footer>
    </div>
  );
}
