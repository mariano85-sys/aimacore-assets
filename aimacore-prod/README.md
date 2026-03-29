# AimaCore — Sitio Web

Sitio web de la agencia AimaCore. React + Vite + Tailwind CSS.

## Estructura

- `/` → Landing page principal
- `/tools/signature` → Generador de firma HTML para n8n

## Deploy en Vercel (con dominio aimacore.com.ar de Donweb)

### 1. Subir el código a GitHub
```bash
git init
git add .
git commit -m "AimaCore sitio web v1"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/aimacore-web.git
git push -u origin main
```

### 2. Conectar con Vercel
1. Ir a https://vercel.com → Sign up con tu cuenta de GitHub
2. "Add New Project" → importar el repo `aimacore-web`
3. Framework: Vite (lo detecta automáticamente)
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click "Deploy"

### 3. Conectar el dominio aimacore.com.ar desde Donweb
En Vercel → tu proyecto → Settings → Domains → Agregar `aimacore.com.ar`

Vercel te va a dar 2 registros DNS. En Donweb:
- Ir a Panel → Dominios → aimacore.com.ar → Gestionar DNS
- Borrar los registros A y CNAME que existen
- Agregar registro **A** → `@` → IP que te da Vercel (ej: `76.76.21.21`)
- Agregar registro **CNAME** → `www` → `cname.vercel-dns.com`
- Esperar hasta 24hs (generalmente en 1-2 horas ya funciona)

### Desarrollo local
```bash
npm install
npm run dev
```
