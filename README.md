# CUATRO DIVANGO — Landing V1.4

**Tu historia hecha canción.**

Landing premium de canciones personalizadas. Fase 2 completada: frontend funcional, responsive, mobile-first. Sin pagos, sin backend, sin base de datos, sin correos (Fases 3 y 4).

---

## Cómo correr el proyecto

```bash
npm install
npm run dev        # desarrollo → http://localhost:3000
npm run build      # build de producción
npm start          # servir producción
```

Requiere Node.js 18.17 o superior.

## Stack

- **Next.js 14** (App Router, página 100% estática prerenderizada)
- **React 18** + **TypeScript 5**
- **Tailwind CSS 3**
- Cero dependencias de UI externas. First Load JS: **92.5 kB**.

## Estructura

```
app/
  layout.tsx        → metadata SEO (es_MX), fuente, viewport
  page.tsx          → orden de secciones (idéntico al mockup)
  globals.css       → tokens, focus visible, reduced-motion
components/
  Header.tsx        → nav sticky + menú móvil
  Hero.tsx          → titular, promesa, CTAs, prueba social
  Occasions.tsx     → 6 tarjetas de ocasiones
  Examples.tsx      → carrusel de casos reales con play (mock)
  HowItWorks.tsx    → "Así de fácil" en 3 pasos
  FormSection.tsx   → encabezado + bullets + formulario
  SongForm.tsx      → formulario de 6 pasos (mock, sin backend)
  FinalCta.tsx      → banda navy con micrófono
  Footer.tsx        → navegación, redes, copyright
lib/
  content.ts        → TODO el copy vive aquí. Cambiar textos = editar este archivo.
public/images/      → assets (ver nota abajo)
```

## ⚠️ Assets pendientes (reemplazo de 1 minuto)

Los archivos en `public/images/` son **placeholders SVG** con la paleta y
proporciones exactas del mockup. Para el lanzamiento, reemplaza cada archivo
por el arte final **con el mismo nombre**:

| Archivo | Contenido final |
|---|---|
| `hero.svg` | Ilustración principal del héroe |
| `ejemplo-*.svg` (6) | Portadas de las canciones de ejemplo |
| `estudio.svg` | Foto del estudio / micrófono |
| `avatar-1..3.svg` | Fotos de clientes reales |

Si el arte final es JPG/PNG/WebP, cambia también la extensión en `lib/content.ts`.

**Nota legal registrada en Fase 1:** los nombres propios de "Casos reales"
(`lib/content.ts → examplesSection`) requieren autorización de uso de imagen
antes del lanzamiento público. Se cambian en ese archivo en segundos.

## Audio de los ejemplos

El botón ▶ de cada tarjeta es un reproductor mock. Cuando tengas los demos,
coloca los MP3 en `public/audio/` y llena el campo `audioSrc` de cada item en
`lib/content.ts`. El reproductor real ya está cableado: detecta el archivo y
reproduce automáticamente.

## Formulario

6 pasos (coinciden con los 6 puntos del mockup):
1. Para quién / ocasión / nombre
2. La historia
3. Estilo musical
4. Frases especiales (opcional)
5. Datos de contacto
6. Resumen y envío

Validación client-side por paso. El envío es **mock** (muestra pantalla de
éxito). El punto de conexión para Fase 3/4 está marcado con comentario en
`SongForm.tsx → submit()`.

## Verificaciones realizadas

- ✅ `next build` compila sin errores ni warnings de tipos
- ✅ Página estática prerenderizada (SSG)
- ✅ 18/18 checks de criterios Lighthouse (SEO, a11y, perf, best practices)
  auditados sobre el HTML de producción*
- ✅ Todos los textos del mockup presentes en el render
- ✅ Todas las imágenes resuelven HTTP 200
- ✅ Mobile-first: breakpoints xs/sm/md/lg/xl, inputs de 48px, menú hamburguesa,
  carrusel con scroll-snap táctil
- ✅ Accesibilidad: focus visible, `prefers-reduced-motion`, aria-labels,
  labels en todos los campos

\* El binario de Chrome no puede descargarse en este entorno de build, por lo
que la puntuación numérica de Lighthouse debe correrse localmente:
`npx lighthouse http://localhost:3000 --view`. Con página estática, 92 kB de
JS, cero webfonts y cero third-parties, el rango esperado es 95–100 en las
cuatro categorías.

## Novedades v1.4 — Formulario

- **Eliminada** la pregunta "¿Qué estilo musical prefieres?" y su selector de géneros.
- **Nueva:** "¿Cómo imaginas tu canción?" — textarea abierto, sin ejemplos de
  bandas, artistas ni géneros.
- **Nueva:** "¿Qué tipo de voz prefieres?" (Masculina / Femenina / Me es indiferente).
- **Nueva:** "¿Cuánto debería durar aproximadamente?" (2 / 3 / 4 minutos / Sin preferencia).
- **Nueva:** "¿La canción debe mencionar nombres?" (Sí/No) → si Sí, campo
  "¿Qué nombres deben aparecer?". Sustituye al antiguo campo obligatorio de
  nombre del paso 1 (evita preguntar lo mismo dos veces).
- **Nueva:** "¿La canción será una sorpresa?" (Sí/No) → si Sí, mensaje informativo.
- Reorganizado en **8 pasos ligeros** (máx. 2 preguntas visibles a la vez).
- Misma estética: tarjeta, inputs, botones, animaciones, puntos de progreso y
  pantalla de éxito idénticos. Opciones como pills accesibles (radios reales).
- Hero, ejemplos, navegación, precio, SEO, responsive: **intactos**.

## Novedades v1.3

- **Sección de ejemplos rediseñada:** exactamente 4 tarjetas en orden fijo
  (Hormiga González, Chivas, Alan Pulido, Alexis Vega) con las portadas finales.
- Imágenes optimizadas: 3.3 MB → 388 KB, encuadre original 800×1000 intacto
  en las cuatro (alturas idénticas, alineación perfecta).
- Tarjetas premium: elevación al hover, zoom suave de imagen (500ms), anillo
  rojo sutil, degradado inferior de integración, mayor separación (24px).
- Escritorio: fila de 4 alineadas. Móvil: carrusel táctil con puntos (sin cambios
  de comportamiento responsive).
- Botón play conservado (mock). Canciones/YouTube/Spotify: pendiente de conexión.
- Hero, precio, formulario, navegación, SEO, rutas y demás secciones: **intactos**.

## Novedades v1.2

- **Hero:** nueva ilustración final (PNG transparente optimizado: 2.9 MB → 425 KB,
  sin recortes ni deformación). Halo radial sutil de integración.
- **Tipografía premium:** Plus Jakarta Sans Variable (títulos) + Inter Variable
  (cuerpo). Autoalojadas vía @fontsource — cero requests externos.
- **Precio visible:** "Desde $499 MXN — Canción personalizada completa." bajo el
  texto principal del Hero, tratamiento editorial (no anuncio).
- **Bullet eliminado** del formulario: "Hecha con IA y producción profesional".
- **Pulido premium:** sombras en capas, radios 18px, hover con elevación,
  transiciones 300ms con curva suave, espaciado más generoso.
- Identidad de color, textos, SEO, rutas, formulario y lógica: **intactos**.

## ⚠️ Fix de deploy en Vercel (v1.0.1)

El repo desplegado contenía archivos viejos en `src/app/` (de una estructura
anterior) que chocaban con la estructura válida `app/` en raíz y rompían el
type-check (`Cannot find module '@/config/site'`). Corregido en tres capas:

1. **Estructura única:** este proyecto usa exclusivamente `app/` en raíz.
   No debe existir `src/` en el repo. **Al subir este ZIP, borra del repo
   cualquier carpeta `src/` y `config/` que haya quedado de antes.**
2. **`tsconfig.json`** excluye `src` del type-check: aunque quedara un
   archivo viejo, el build ya no falla.
3. **`.vercelignore`** excluye `src` del deploy como tercera barrera.

Recomendación para el deploy: sustituye el contenido del repo por completo
con este ZIP (no mezcles con lo anterior) y haz push.

---

## Próximas fases

- **Fase 3:** integración de pagos
- **Fase 4:** backend, base de datos, correos y automatizaciones
