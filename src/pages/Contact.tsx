import TopNav from "@/components/TopNav";
import contactHero from "@/assets/contact-hero.jpeg";
import { Instagram, Phone, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "'Space Grotesk', monospace", minHeight: "100vh", position: "relative", overflow: isMobile ? "auto" : "hidden" }}>
      <TopNav />
      
      {/* Hero image */}
      {isMobile ? (
        <div style={{ position: "relative", width: "100%" }}>
          <img
            src={contactHero}
            alt="Загоскин Евгений"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "75vh",
              objectFit: "contain",
              objectPosition: "center 20%",
              display: "block",
              background: "#000",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.25) 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.25) 92%, transparent 100%)",
            }}
          />
        </div>
      ) : (
        <img
          src={contactHero}
          alt="Загоскин Евгений"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
            display: "block",
          }}
        />
      )}

      {/* Gradient overlay (desktop only) */}
      {!isMobile && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, transparent 30%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.92) 100%)",
          pointerEvents: "none",
        }} />
      )}

      {/* Contact info */}
      <div style={{
        position: isMobile ? "relative" : "absolute",
        top: isMobile ? undefined : 0,
        right: isMobile ? undefined : 0,
        bottom: isMobile ? undefined : 0,
        width: isMobile ? "100%" : "42%",
        display: "flex",
        flexDirection: "column",
        justifyContent: isMobile ? "flex-start" : "center",
        padding: isMobile ? "0 28px 48px" : "60px 48px 60px 32px",
        marginTop: isMobile ? 0 : undefined,
        zIndex: 10,
      }}>
        {/* Name */}
        <h1 style={{
          fontSize: isMobile ? 24 : 28,
          fontWeight: 300,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          marginBottom: 4,
          lineHeight: 1.2,
        }}>
          ЗАГОСКИН<br />ЕВГЕНИЙ
        </h1>
        <p style={{
          fontSize: isMobile ? 10 : 11,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          marginBottom: isMobile ? 28 : 40,
        }}>
          рэпер · актёр · талант
        </p>

        {/* Divider */}
        <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)", marginBottom: isMobile ? 24 : 36 }} />

        {/* Instagram */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: isMobile ? 22 : 28 }}>
          <Instagram size={16} style={{ marginTop: 2, opacity: 0.5, flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Instagram
            </p>
            <a
              href="https://instagram.com/hustle_pride_skaye"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textDecoration: "none" }}
            >
              instagram.com/hustle_pride_skaye
            </a>
          </div>
        </div>

        {/* Phone */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: isMobile ? 22 : 28 }}>
          <Phone size={16} style={{ marginTop: 2, opacity: 0.5, flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Телефон
            </p>
            <a href="tel:+77958980304" style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "block" }}>
              +7-795-898-0304
            </a>
          </div>
        </div>

        {/* Email */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: isMobile ? 28 : 36 }}>
          <Mail size={16} style={{ marginTop: 2, opacity: 0.5, flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Почта
            </p>
            <a
              href="mailto:Mr.12.sk@gmail.com"
              style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textDecoration: "none" }}
            >
              Mr.12.sk@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
