[README.md](https://github.com/user-attachments/files/33758414/README.md)
# Reiki Dos Mundos · Centro de Terapias Naturales

Sitio web multipágina corporativo y responsive para **Reiki Dos Mundos**, centro de terapias naturales dirigido por **Carmen Menza** en Cornellà de Llobregat (Barcelona).

---

## 🌿 Descripción General

Este proyecto web presenta de forma clara, serena y profesional las terapias holísticas y bioenergéticas que se realizan en el centro. El concepto de «Dos Mundos» simboliza el puente y la armonía entre el plano físico/tangible del cuerpo y el plano energético/sutil de la conciencia y las emociones.

El sitio ha sido diseñado con una arquitectura HTML5 semántica y CSS3 estándar, cuidando la experiencia de usuario (UX/UI), la accesibilidad, la adaptabilidad a dispositivos móviles y una paleta visual coherente centrada en el color corporativo `#2e6363`.

---

## 🎨 Identidad Visual y Estilos

- **Color Corporativo Base:** `#2e6363` (verde mineral / teal profundo).
- **Variaciones de Acento y Superficie:**
  - Primario oscuro: `#1b3d3d`
  - Primario claro: `#448080`
  - Fondo suave sutil: `#eaf3f2`
  - Acento cálido: `#c49a5b`
  - Fondo general: `#f8faf9`
  - Superficies de tarjeta: `#ffffff`
- **Tipografías:**
  - Títulos y destacados: *Cormorant Garamond* (elegancia serena y calidez humanista).
  - Texto de lectura y controles: *Plus Jakarta Sans* (legibilidad, modernidad y neutralidad).
- **Logotipo Oficial:** Emblema continuo de Carmen Menza con el motivo de terapia y loto (`./reiki-logo.png`).
- **Canales de Comunicación:** Comunicación directa y transparente sin formularios (enlace telefónico directo `tel:+34...` y chat directo de WhatsApp `https://wa.me/...`).

---

## 📂 Estructura de Páginas

El proyecto se compone de páginas HTML independientes y autoportantes que comparten una estructura unificada de cabecera (Header con navegación y menú móvil) y pie de página (Footer con mapa del sitio, datos de contacto y notas legales):

```
├── index.html                   # Página de inicio / Landing principal
├── terapias.html                # Catálogo general del Centro de Terapias Naturales
│   ├── reiki.html               # Terapia Reiki tradicional japonesa y chakras
│   ├── coach-emocional.html     # Coaching Emocional y desbloqueo de patrones
│   ├── kinesis.html             # Kinesis / Kinesiología holística y test muscular
│   ├── ley-de-la-atraccion.html # Ley de la Atracción y reprogramación subconsciente
│   ├── canalizacion.html        # Canalización espiritual y mensajes del alma
│   ├── regresiones.html         # Terapia de Regresiones conscientes a memorias pasadas
│   └── sanacion.html            # Sanación Energética, campo áurico y balance cuántico
├── sobre-mi.html                # Trayectoria, filosofía y vocación de Carmen Menza
├── contacto.html                # Canales de contacto directo, horarios y cómo llegar
├── styles.css                   # Hoja de estilos global y responsive en CSS3
└── nav.js                       # Lógica de navegación móvil y resaltado de página activa
```

---

## 🚀 Puesta en Marcha y Pruebas Locales

No se requiere ningún paso de compilación obligatorio para visualizar o editar el sitio web. Puedes probarlo de cualquiera de las siguientes formas:

### Opción 1: Apertura directa (Sin servidor)
1. Descarga o clona el repositorio en tu ordenador.
2. Haz doble clic sobre `index.html` (o cualquier otro archivo `.html`) para abrirlo en tu navegador favorito (Chrome, Safari, Firefox, Edge).
3. Todas las rutas son relativas, por lo que la navegación entre páginas funcionará de inmediato.

### Opción 2: Servidor estático local
Puedes servir el directorio con cualquier servidor HTTP local:

- **Con Python:**
  ```bash
  python3 -m http.server 8080
  ```
  Accede en tu navegador a `http://localhost:8080`

- **Con Node / npx (Serve):**
  ```bash
  npx serve .
  ```

- **Con Node / Vite (Entorno de desarrollo):**
  ```bash
  npm install
  npm run dev
  ```

---

## 📋 Resumen de Contenidos por Página

| Archivo | Sección | Contenido destacado |
| :--- | :--- | :--- |
| `index.html` | Inicio | Portada, explicación de la filosofía de los Dos Mundos, catálogo resumen de las 7 terapias, semblanza de Carmen Menza y llamada a la acción. |
| `terapias.html` | Terapias | Catálogo completo con las 7 vías de armonización practicadas en el centro y enlaces directos a cada ficha. |
| `reiki.html` | Reiki | Principios del Reiki Usui, armonización de chakras, reducción del estrés y desarrollo de la sesión en camilla. |
| `coach-emocional.html` | Coach Emocional | Acompañamiento consciente, gestión de emociones, límites saludables y desactivación de patrones limitantes. |
| `kinesis.html` | Kinesis | Kinesiología holística, biofeedback del test muscular y liberación de estrés neuromuscular y celular. |
| `ley-de-la-atraccion.html` | Ley de la Atracción | Coherencia entre mente, emoción y acción; superación de creencias de escasez y gratitud anticipada. |
| `canalizacion.html` | Canalización | Conexión con planos sutiles y guías espirituales para recibir orientación y consuelo en encrucijadas vitales. |
| `regresiones.html` | Regresiones | Exploración en relajación consciente (ondas alfa/theta) hacia memorias pasadas o infancia para sanar el origen de bloqueos. |
| `sanacion.html` | Sanación | Limpieza áurica, restablecimiento electromagnético, equilibrio de frecuencias sutiles y vitalidad corporal. |
| `sobre-mi.html` | Sobre Mí | Biografía de Carmen Menza, valores en consulta, visión integrativa y compromiso humano. |
| `contacto.html` | Contacto | Vías directas sin formularios: teléfono directo, WhatsApp con mensaje preconfigurado, horarios y opciones de transporte público (Metro L5, Tram, Renfe). |

---

## 🛠️ Tecnologías Empleadas

- **HTML5:** Estructura semántica completa (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **CSS3:** Variables CSS (Custom Properties), CSS Grid, Flexbox, diseño fluido con `clamp()` y tipografía web de Google Fonts (*Cormorant Garamond* y *Plus Jakarta Sans*).
- **JavaScript (Vanilla):** Menú desplegable para dispositivos móviles y detección automática de página activa en la barra de navegación.

---

## 📄 Derechos y Titularidad

© 2026 **Reiki Dos Mundos · Carmen Menza**. Todos los derechos reservados.  
Centro de Terapias Naturales en Cornellà de Llobregat (Barcelona, España).
