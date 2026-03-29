import { Outlet, Link, useLocation } from "react-router";
import { Globe, Mail } from "lucide-react";
import logoHorizontal from "../../imports/aimacore_logo_horizontal.svg";

export function AimaCoreLayout() {
  const location = useLocation();

  const links = [
    { name: "Inicio", path: "/", icon: <Globe className="w-4 h-4" /> },
    { name: "Generador de Firma", path: "/tools/signature", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#040d1a] font-sans text-white">
      <nav className="fixed top-0 left-0 right-0 h-16 bg-[#040d1a]/80 backdrop-blur-md border-b border-[#0ea5e9]/20 z-50 flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoHorizontal} alt="AimaCore" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[#0ea5e9]/20 text-[#0ea5e9]"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
