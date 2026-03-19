import { useState } from "react";
import TopNav from "@/components/TopNav";

const contacts = [
{ label: "Букинг", value: "bookings@gentleman.live", href: "mailto:bookings@gentleman.live" },
{ label: "Пресса и медиа", value: "press@gentleman.live", href: "mailto:press@gentleman.live" },
{ label: "The Velvet Hour", value: "events@thevelvethour.live", href: "mailto:events@thevelvethour.live" },
{ label: "Город", value: "Metro City" }];


const socials = [
{ label: "Instagram", handle: "@gentleman" },
{ label: "YouTube", handle: "Gentleman Music" },
{ label: "Facebook", handle: "gentlemanmusic" },
{ label: "Spotify", handle: "Gentleman" },
{ label: "Soundcloud", handle: "gentleman" },
{ label: "Beatport", handle: "Gentleman" }];


const velvetSocials = [
{ label: "Instagram", handle: "@thevelvethour" },
{ label: "YouTube", handle: "The Velvet Hour" },
{ label: "Facebook", handle: "thevelvethour" }];


const faqs = [
{ q: "Какова стандартная длительность сета?", a: "Стандартные сеты — 2 часа, но для подходящих мероприятий я люблю расширенные 4–6 часовые сессии. Сеты от открытия до закрытия доступны для избранных площадок." },
{ q: "Вы выступаете на частных мероприятиях?", a: "Да, выборочно. Пожалуйста, напишите на букинг-почту с деталями вашего мероприятия, датой и концепцией." },
{ q: "Каковы технические требования?", a: "Подробный технический райдер предоставляется по запросу. Минимальные требования включают Pioneer CDJ-3000/DJM-V10 или аналог." },
{ q: "Как отправить демо для The Velvet Hour?", a: "Отправьте приватную ссылку на SoundCloud или Dropbox на events@thevelvethour.live с темой «Demo Submission»." }];


const s = {
  label: { fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)" },
  row: { fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.7)", transition: "opacity 0.3s", cursor: "default" },
  footer: { fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)" }
};

const HoverRow = ({ children, style, onClick }: {children: React.ReactNode;style?: React.CSSProperties;onClick?: () => void;}) =>
<div
  style={{ ...s.row, opacity: 0.7, ...style }}
  onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
  onMouseLeave={(e) => e.currentTarget.style.opacity = "0.7"}
  onClick={onClick}>
  
    {children}
  </div>;


const Contact = () => {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "'Space Grotesk', monospace", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <TopNav />
      <div style={{ flex: 1 }} />
      

      
    </main>);

};

export default Contact;