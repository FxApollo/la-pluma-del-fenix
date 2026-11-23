// ==========================================
// 1. TUS ESCRITOS Y ESCENAS (Edita aquí)
// ==========================================
const ESCRITOS = [
  {
    titulo: "I. La Colina Melancólica",
    pistaNombre: "Gorillaz - On Melancholy Hill",
    audioUrl: "https://archive.org/download/gorillaz-songs-compilation/Gorillaz%20-%20On%20Melancholy%20Hill.mp3",
    bg: "#0d1117",
    accent: "#58a6ff",
    parrafos: [
      "Hay recuerdos que no pesan por lo que fueron, sino por la exactitud con la que regresan cuando la ciudad se queda en silencio.",
      "Al bajar por este texto, notarás cómo la atmósfera muta sin anuncios ni pausas forzadas, acompañando el pulso de cada escena."
    ]
  },
  {
    titulo: "II. Cenizas y Tiempo",
    pistaNombre: "Nocturno en Cenizas (Piano)",
    audioUrl: "https://archive.org/download/cd_nocturnes_frederic-chopin_0/disc1/02.%20Fr%C3%A9d%C3%A9ric%20Chopin%20-%20Nocturne%20in%20E-flat%20major%2C%20Op.%209%2C%20No.%202.mp3",
    bg: "#160f0d",
    accent: "#e07a3f",
    parrafos: [
      "Todo lo que arde deja una forma distinta en la memoria. El fénix no vuelve a ser el mismo ave: conserva la cicatriz de haber sido fuego.",
      "Aquí la segunda pista entra con un crossfade real mientras la canción anterior se desvanece suavemente."
    ]
  }
];

// ==========================================
// 2. MOTOR DE RENDERIZADO Y AUDIO (No tocar)
// ==========================================
const canales = [new Audio(), new Audio()];
canales.forEach(c => { c.loop = true; c.crossOrigin = "anonymous"; });

let activo = 0;
let urlActual = "";
let iniciado = false;
let muteado = false;
let fadeInterval = null;

function renderizarEscenas() {
  const contenedor = document.getElementById('lector-escenas');
  contenedor.innerHTML = ESCRITOS.map(escena => `
    <section class="escena"
             data-titulo="${escena.pistaNombre}"
             data-audio="${escena.audioUrl}"
             data-bg="${escena.bg}"
             data-accent="${escena.accent}">
      <h2>${escena.titulo}</h2>
      ${escena.parrafos.map(p => `<p>${p}</p>`).join('')}
    </section>
  `).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && iniciado) {
        activarEscena(entry.target);
      }
    });
  }, { threshold: 0.55 });

  document.querySelectorAll('.escena').forEach(escena => observer.observe(escena));
}

function comenzarLectura() {
  iniciado = true;
  document.getElementById('prologo').classList.add('oculto');
  const primeraEscena = document.querySelector('.escena');
  if (primeraEscena) activarEscena(primeraEscena);
}

function crossfadeAudio(nuevaUrl, titulo) {
  if (!iniciado || !nuevaUrl || nuevaUrl === urlActual) return;
  urlActual = nuevaUrl;
  document.getElementById('pista-actual').textContent = titulo;

  const saliente = canales[activo];
  const siguienteIdx = activo === 0 ? 1 : 0;
  const entrante = canales[siguienteIdx];
  activo = siguienteIdx;

  entrante.src = nuevaUrl;
  entrante.volume = 0;
  entrante.play().catch(e => console.log("Esperando interacción:", e));

  clearInterval(fadeInterval);
  let paso = 0;
  const pasosTotales = 25;
  fadeInterval = setInterval(() => {
    paso++;
    const progreso = paso / pasosTotales;
    entrante.volume = muteado ? 0 : Math.min(0.85, progreso * 0.85);
    saliente.volume = muteado ? 0 : Math.max(0, (1 - progreso) * 0.85);

    if (paso >= pasosTotales) {
      clearInterval(fadeInterval);
      saliente.pause();
    }
  }, 100);
}

function activarEscena(el) {
  document.querySelectorAll('.escena').forEach(s => s.classList.remove('activa'));
  el.classList.add('activa');

  document.documentElement.style.setProperty('--bg', el.dataset.bg || '#0c0b0e');
  document.documentElement.style.setProperty('--accent', el.dataset.accent || '#d97736');

  crossfadeAudio(el.dataset.audio, el.dataset.titulo);
}

function toggleMute() {
  muteado = !muteado;
  document.getElementById('btn-mute').textContent = muteado ? 'Activar sonido' : 'Silenciar';
  canales[activo].volume = muteado ? 0 : 0.85;
}

function toggleBuscador() {
  document.getElementById('panel-buscador').classList.toggle('abierto');
}

async function buscarAudius(e) {
  if (e.key !== 'Enter') return;
  const query = e.target.value.trim();
  if (!query) return;

  const contenedor = document.getElementById('resultados-musica');
  contenedor.innerHTML = '<div class="estado-busqueda">Buscando pistas sin anuncios...</div>';

  try {
    const res = await fetch(`https://discoveryprovider.audius.co/v1/tracks/search?query=${encodeURIComponent(query)}&app_name=LaPlumaDelFenix`);
    const json = await res.json();
    const tracks = json.data.slice(0, 8);

    if (!tracks.length) {
      contenedor.innerHTML = '<div class="estado-busqueda">Sin resultados. Prueba otra palabra.</div>';
      return;
    }

    contenedor.innerHTML = tracks.map(t => {
      const streamUrl = `https://discoveryprovider.audius.co/v1/tracks/${t.id}/stream?app_name=LaPlumaDelFenix`;
      const tituloLimpio = `${t.user.name} - ${t.title}`.replace(/'/g, "");
      return `
        <div class="item-pista" onclick="probarPista('${streamUrl}', '${tituloLimpio}')">
          <strong>${t.title}</strong>
          <span>${t.user.name}</span>
        </div>
      `;
    }).join('');
  } catch (err) {
    contenedor.innerHTML = '<div class="estado-busqueda" style="color: #e07a3f;">Error conectando al catálogo. Intenta de nuevo.</div>';
  }
}

function probarPista(url, titulo) {
  iniciado = true;
  document.getElementById('prologo').classList.add('oculto');
  crossfadeAudio(url, titulo);
}

// Iniciar renderizado al cargar la página
renderizarEscenas();
