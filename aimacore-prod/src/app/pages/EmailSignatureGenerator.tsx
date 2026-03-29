import { useState, useEffect } from "react";
import { Copy, Check, Download, Mail } from "lucide-react";
import logoHorizontal from "../../imports/aimacore_logo_horizontal.svg";
import logoIcono from "../../imports/aimacore_logo_icono.svg";

export function EmailSignatureGenerator() {
  const [base64Logo, setBase64Logo] = useState("");
  const [copied, setCopied] = useState(false);
  const [useIcon, setUseIcon] = useState(false);

  useEffect(() => {
    // Convert SVG to Base64 to be embedded in email
    const generateBase64 = async () => {
      const targetLogo = useIcon ? logoIcono : logoHorizontal;
      try {
        const response = await fetch(targetLogo);
        const text = await response.text();
        const base64 = btoa(unescape(encodeURIComponent(text)));
        setBase64Logo(`data:image/svg+xml;base64,${base64}`);
      } catch (error) {
        console.error("Error generating base64:", error);
      }
    };
    generateBase64();
  }, [useIcon]);

  const htmlSignature = `
<div style="font-family: Arial, sans-serif; color: #333; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
  <p style="margin: 0; font-weight: bold; font-size: 16px; color: #0f172a;">Mariano Pérez</p>
  <p style="margin: 2px 0 10px; font-size: 14px; color: #64748b;">CEO & Fundador — AimaCore<br/>Soluciones de IA para Negocios</p>
  <img src="${base64Logo}" alt="AimaCore Logo" style="height: ${useIcon ? '40px' : '30px'}; width: auto; display: block;" />
  <p style="margin: 10px 0 0; font-size: 12px; color: #94a3b8;">
    <a href="mailto:mariano85@gmail.com" style="color: #0ea5e9; text-decoration: none;">mariano85@gmail.com</a>
  </p>
</div>
  `.trim();

  const handleCopy = () => {
    try {
      // Fallback for when clipboard API is blocked (like in iframes)
      const textArea = document.createElement("textarea");
      textArea.value = htmlSignature;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#040d1a] text-white p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-8">
        <header className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-4 bg-[#0ea5e9]/10 rounded-full mb-2 border border-[#0ea5e9]/30">
            <Mail className="w-8 h-8 text-[#0ea5e9]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Generador de Firma HTML</h1>
          <p className="text-slate-400">
            Resuelve el "Pendiente #1" de tu lista. Copia este HTML y pégalo en el nodo de Gmail en n8n.
            <br/>El logo ya está convertido a Base64 para que nunca se rompa.
          </p>
        </header>

        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 shadow-2xl grid md:grid-cols-2 gap-8">
          {/* Controls & Preview */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Versión del Logo</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => setUseIcon(false)}
                  className={`flex-1 py-3 px-4 rounded-xl border transition-all ${!useIcon ? 'bg-[#0ea5e9]/20 border-[#0ea5e9] text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
                >
                  Logo Horizontal
                </button>
                <button 
                  onClick={() => setUseIcon(true)}
                  className={`flex-1 py-3 px-4 rounded-xl border transition-all ${useIcon ? 'bg-[#0ea5e9]/20 border-[#0ea5e9] text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
                >
                  Logo Ícono
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-slate-300">Previsualización (Cómo se verá en Gmail)</h3>
              <div className="bg-white p-6 rounded-xl text-black">
                <div dangerouslySetInnerHTML={{ __html: htmlSignature }} />
              </div>
            </div>
          </div>

          {/* Code Output */}
          <div className="space-y-4 flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-slate-300">Código HTML para n8n</h3>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-lg text-sm font-semibold transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "¡Copiado!" : "Copiar HTML"}
              </button>
            </div>
            
            <div className="flex-1 bg-slate-950 rounded-xl border border-slate-800 p-4 relative overflow-hidden group">
              <pre className="text-xs text-slate-400 overflow-auto max-h-[300px] h-full whitespace-pre-wrap font-mono leading-relaxed">
                {htmlSignature}
              </pre>
            </div>
            
            <p className="text-xs text-slate-500 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              💡 <strong>Tip para n8n:</strong> En tu prompt del Agente Icebreaker, puedes decirle al modelo: "No incluyas una firma, yo la agregaré dinámicamente". Y luego en el nodo de Gmail, concatena el resultado del Agente + este HTML.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
