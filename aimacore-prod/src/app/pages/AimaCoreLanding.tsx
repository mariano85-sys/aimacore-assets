import { useState } from "react";
import { ArrowRight, Bot, MessageSquare, Calendar, TrendingUp, Zap, CheckCircle, Send, Mail, Phone, MapPin } from "lucide-react";
import logoHorizontal from "../../imports/aimacore_logo_horizontal.svg";
import logoIcono from "../../imports/aimacore_logo_icono.svg";

export function AimaCoreLanding() {
  const [form, setForm] = useState({ nombre: "", email: "", negocio: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Mailto fallback — reemplazar por webhook n8n cuando esté listo
    const subject = encodeURIComponent(`Consulta de ${form.nombre} — ${form.negocio}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nNegocio: ${form.negocio}\n\nMensaje:\n${form.mensaje}`
    );
    window.location.href = `mailto:mariano85@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSent(true);
      setSending(false);
    }, 1000);
  };

  const servicios = [
    {
      icon: <MessageSquare className="w-6 h-6 text-[#0ea5e9]" />,
      titulo: "Agente de Respuestas Automáticas",
      desc: "Respondé consultas de clientes en WhatsApp e Instagram en segundos, las 24 horas. Sin intervención humana.",
      bullets: ["Integración con WhatsApp Business", "Respuestas personalizadas por IA", "Derivación a humano cuando sea necesario"],
    },
    {
      icon: <Calendar className="w-6 h-6 text-emerald-400" />,
      titulo: "Toma de Reservas Automática",
      desc: "Tu local lleno sin que tengas que contestar un solo mensaje. El agente agenda, confirma y recuerda.",
      bullets: ["Confirmaciones por WhatsApp", "Integración con Google Calendar", "Recordatorios automáticos"],
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-violet-400" />,
      titulo: "Automatización de Correos",
      desc: "Campañas de email personalizadas generadas por IA. Cada cliente recibe un mensaje que parece escrito a mano.",
      bullets: ["Cold emailing con IA generativa", "Seguimiento automático de leads", "Integración con n8n"],
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      titulo: "Flujos de Trabajo a Medida",
      desc: "Si lo hacés más de 3 veces por semana, lo podemos automatizar. Cotización gratuita en 24hs.",
      bullets: ["Análisis de procesos internos", "Integración con tus herramientas actuales", "Soporte y mantenimiento incluido"],
    },
  ];

  return (
    <div className="bg-[#040d1a] min-h-screen text-white flex flex-col items-center">

      {/* Hero */}
      <section className="w-full max-w-7xl px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-sm font-semibold">
            <Bot className="w-4 h-4" />
            Especialistas en IA para Buenos Aires
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Automatizá tu negocio con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]">
              Inteligencia Artificial
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Ayudamos a comercios y empresas de Buenos Aires a ahorrar decenas de horas semanales automatizando reservas, consultas y flujos de trabajo repetitivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contacto"
              className="px-8 py-4 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] flex items-center justify-center gap-2"
            >
              Quiero una demostración
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/20 to-[#0284c7]/20 blur-[100px] rounded-full" />
          <img
            src={logoIcono}
            alt="AimaCore Icono"
            className="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl animate-[pulse_6s_ease-in-out_infinite]"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="w-full max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { valor: "24/7", label: "Disponibilidad del agente" },
            { valor: "< 5s", label: "Tiempo de respuesta" },
            { valor: "80%", label: "Reducción de tareas manuales" },
            { valor: "100%", label: "Personalización por negocio" },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]">{stat.valor}</p>
              <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="w-full max-w-7xl px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Soluciones de IA implementadas y funcionando en días, no en meses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="bg-slate-900/50 border border-slate-800 hover:border-[#0ea5e9]/40 rounded-2xl p-8 transition-all group hover:bg-slate-900"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold">{s.titulo}</h3>
              </div>
              <p className="text-slate-400 mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="w-full max-w-7xl px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Cómo funciona?</h2>
          <p className="text-slate-400 text-lg">En 3 pasos simples tu negocio empieza a automatizarse.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "01", titulo: "Diagnóstico gratuito", desc: "Analizamos tus procesos y te mostramos exactamente qué podemos automatizar y cuánto tiempo vas a ahorrar." },
            { num: "02", titulo: "Implementación rápida", desc: "Configuramos los agentes de IA y las automatizaciones en menos de una semana. Vos seguís trabajando normal." },
            { num: "03", titulo: "Resultados medibles", desc: "Te mostramos en números cuánto tiempo y dinero ahorrás cada mes. Soporte incluido." },
          ].map((paso, i) => (
            <div key={i} className="relative">
              <div className="text-7xl font-bold text-[#0ea5e9]/10 absolute -top-4 -left-2 select-none">{paso.num}</div>
              <div className="relative pt-6 pl-2">
                <h3 className="text-xl font-bold mb-3">{paso.titulo}</h3>
                <p className="text-slate-400 leading-relaxed">{paso.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="w-full max-w-7xl px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 via-[#040d1a] to-slate-900 border border-[#0ea5e9]/30 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ea5e9]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0284c7]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-14">
            {/* Info */}
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Hablemos de tu negocio</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Contanos qué hacés y en menos de 24 horas te mostramos cómo la IA puede ahorrarle tiempo y plata a tu negocio. Sin compromiso.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-[#0ea5e9]/10 rounded-lg border border-[#0ea5e9]/20">
                    <Mail className="w-5 h-5 text-[#0ea5e9]" />
                  </div>
                  <span>mariano85@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-[#0ea5e9]/10 rounded-lg border border-[#0ea5e9]/20">
                    <MapPin className="w-5 h-5 text-[#0ea5e9]" />
                  </div>
                  <span>Buenos Aires, Argentina</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-slate-500 text-sm">Comercios que ya automatizan con nosotros:</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Pizzerías", "Cervecerías", "Restaurantes", "Veterinarias", "Ópticas", "Parrillas"].map(n => (
                    <span key={n} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">{n}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                  <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                    <CheckCircle className="w-12 h-12 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                  <p className="text-slate-400">Mariano te va a contestar en menos de 24 horas.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-400 block mb-1">Nombre *</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full bg-slate-800/80 border border-slate-700 focus:border-[#0ea5e9] rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 block mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full bg-slate-800/80 border border-slate-700 focus:border-[#0ea5e9] rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">Tipo de negocio *</label>
                    <select
                      name="negocio"
                      required
                      value={form.negocio}
                      onChange={handleChange}
                      className="w-full bg-slate-800/80 border border-slate-700 focus:border-[#0ea5e9] rounded-xl px-4 py-3 text-white outline-none transition-colors"
                    >
                      <option value="" disabled>Seleccioná tu rubro</option>
                      <option>Pizzería / Restaurant</option>
                      <option>Cervecería / Bar</option>
                      <option>Veterinaria</option>
                      <option>Óptica</option>
                      <option>Comercio minorista</option>
                      <option>Servicio profesional</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">¿Qué querés automatizar?</label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Contanos brevemente qué tarea repetitiva te consume más tiempo..."
                      className="w-full bg-slate-800/80 border border-slate-700 focus:border-[#0ea5e9] rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-[#0ea5e9] hover:bg-[#0284c7] disabled:opacity-60 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] flex items-center justify-center gap-2"
                  >
                    {sending ? "Abriendo tu cliente de correo..." : (
                      <>
                        Quiero mi diagnóstico gratuito
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    Sin spam. Sin compromiso. Respuesta en menos de 24 horas.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 text-center text-slate-500 border-t border-white/5 mt-8">
        <img src={logoHorizontal} alt="AimaCore" className="h-8 mx-auto mb-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
        <p>© 2026 AimaCore · Inteligencia Artificial para Negocios · Buenos Aires, Argentina</p>
        <p className="text-sm mt-2">
          <a href="mailto:mariano85@gmail.com" className="hover:text-[#0ea5e9] transition-colors">mariano85@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
