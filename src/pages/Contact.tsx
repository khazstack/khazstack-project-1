import TopNav from "@/components/TopNav";
import contactHero from "@/assets/contact-hero.jpeg";
import { Instagram, Phone, Mail, Clapperboard } from "lucide-react";

const Contact = () => {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "'Space Grotesk', monospace", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <TopNav />
      
      {/* Hero image */}
      <img
        src={contactHero}
        alt="Эльмира Молдабаева"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 20%",
        }}
      />

      {/* Gradient overlay on the right */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, transparent 30%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.92) 100%)",
        pointerEvents: "none",
      }} />

      {/* Contact info — right side */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: "42%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 48px 60px 32px",
        zIndex: 10,
      }}>
        {/* Name */}
        <h1 style={{
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          marginBottom: 4,
          lineHeight: 1.2,
        }}>
          ЭЛЬМИРА<br />МОЛДАБАЕВА
        </h1>
        <p style={{
          fontSize: 11,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          marginBottom: 40,
        }}>
          модель · актриса · лицо
        </p>

        {/* Divider */}
        <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)", marginBottom: 36 }} />

        {/* Instagram */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 28 }}>
          <Instagram size={16} style={{ marginTop: 2, opacity: 0.5, flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Портфолио
            </p>
            <a
              href="https://instagram.com/elmira.mold"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              instagram.com/elmira.mold
            </a>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 4, letterSpacing: "0.05em" }}>
              все работы · реклама · роли
            </p>
          </div>
        </div>

        {/* Phone */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 28 }}>
          <Phone size={16} style={{ marginTop: 2, opacity: 0.5, flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Контакты
            </p>
            <a href="tel:+77771067023" style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "block", marginBottom: 4 }}>
              +7 777 106 7023
            </a>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>звонки / WhatsApp</span>
            <a href="tel:+77022652049" style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "block", marginTop: 8, marginBottom: 4 }}>
              +7 702 265 2049
            </a>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>WhatsApp</span>
          </div>
        </div>

        {/* Email */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 36 }}>
          <Mail size={16} style={{ marginTop: 2, opacity: 0.5, flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Почта
            </p>
            <a
              href="mailto:1109ely@mail.ru"
              style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              1109ely@mail.ru
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)", marginBottom: 28 }} />

        {/* Quote */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <Clapperboard size={16} style={{ marginTop: 2, opacity: 0.35, flexShrink: 0 }} />
          <p style={{
            fontSize: 12,
            fontStyle: "italic",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6,
          }}>
            «Каждый кастинг — мой выход»
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
