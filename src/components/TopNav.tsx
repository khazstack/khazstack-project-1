import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "ГЛАВНАЯ", to: "/" },
  { label: "АНКЕТА", to: "/about" },
  { label: "КОНТАКТЫ", to: "/contact" },
];

const TopNav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center items-center gap-8 h-[44px] z-50 text-lg">
      {navItems.map(({ label, to }) => (
        <Link
          key={to}
          to={to}
          className="transition-opacity hover:opacity-80"
          style={{
            fontSize: 13,
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            color: pathname === to ? "#fff" : "rgba(255,255,255,0.4)",
            textDecoration: "none",
            fontFamily: "'Space Grotesk', monospace",
            padding: "0 12px",
            lineHeight: "44px",
          }}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default TopNav;
