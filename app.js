// ==========================================
// 1. BIBLIOTECA DE RELATOS (Edita aquí)
// ==========================================
const RELATOS = [
  {
    id: "colina-melancolica",
    titulo: "Crónicas de la Colina",
    etiqueta: "Relato de prueba • 2 escenas",
    sinopsis: "Un recorrido nocturno sobre la memoria, el fuego que transforma y la persistencia de los recuerdos.",
    colorTema: "#58a6ff",
    escenas: [
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
    ]
  },
  {
    id: "flores-de-plastico",
    titulo: "Flores de Plástico",
    etiqueta: "Próximamente • Relato",
    sinopsis: "Una historia sobre lo que permanece intacto frente al paso inexorable del tiempo.",
    colorTema: "#d97736",
    escenas: [
      {
        titulo: "Prólogo",
        pistaNombre: "Nocturno en Cenizas (Piano)",
        audioUrl: "https://archive.org/download/cd_nocturnes_frederic-chopin_0/disc1/02.%20Fr%C3%A9d%C3%A9ric%20Chopin%20-%20Nocturne%20in%20E-flat%20major%2C%20Op.%209%2C%20No.%202.mp3",
        bg: "#120e14",
        accent: "#d97736",
        parrafos: [
          "Espacio reservado para montar las escenas de Flores de Plástico."
        ]
      }
    ]
  }
];

// ==========================================
// 2. MOTOR DE NAVEGACIÓN, NAVBAR Y AUDIO
// ==========================================
const canales = [new Audio(), new Audio()];
canales.forEach(c => { c.loop = true; c.crossOrigin = "anonymous"; });

let activo = 0;
let urlActual = "";
let iniciado = false;
let muteado = false;
let enLectura = false;
let fadeInterval = null;
let observer = null;
let ultimoScroll = 0;

// Construir tarjetas del menú de relatos
function renderizarMenu() {
  const grid = document.getElementById('grid-relatos');
  grid.innerHTML = RELATOS.map(relato => `
    <article class="tarjeta-relato" style="--color-relato: ${relato.colorTema}" onclick="abrirRelato('${relato.id}')">
      <div>
        <div class="tarjeta-meta">${relato.etiqueta}</div>
        <h3>${relato.titulo}</h3>
        <p>${relato.sinopsis}</p>
      </div>
      <div class="leer-link">Leer relato →</div>
    </article>
  `).join('');
}

// Paso 1 -> Paso 2: Entrar desde la portada al menú de relatos
function comenzarExperiencia(conSonido) {
  iniciado = true;
  muteado = !conSonido;
  document.getElementById('btn-mute').textContent = muteado ? 'Activar sonido' : 'Silenciar';
  document.getElementById('pista-actual').textContent = muteado ? 'Lectura silenciosa' : 'Elige un relato';

  const prologo = document.getElementById('prologo');
  prologo.classList.add('desvanecer');
  setTimeout(() => prologo.classList.add('oculto'), 1100);

  document.getElementById('vista-menu').classList.remove('oculto');
}

// Paso 2 -> Paso 3: Abrir un relato en el lector inmersivo
function abrirRelato(id) {
  const relato = RELATOS.find(r => r.id === id);
  if (!relato) return;

  enLectura = true;
  window.scrollTo({ top: 0, behavior: 'instant' });

  document.getElementById('vista-menu').classList.add('oculto');
  document.getElementById('btn-volver').classList.remove('oculto');

  const lector = document.getElementById('vista-lector');
  lector.classList.remove('oculto');

  lector.innerHTML = relato.escenas.map(escena => `
    <section class="escena"
             data-titulo="${escena.pistaNombre}"
             data-audio="${escena.audioUrl}"
             data-bg="${escena.bg}"
             data-accent="${escena.accent}">
      <h2>${escena.titulo}</h2>
      ${escena.parrafos.map(p => `<p>${p}</p>`).join('')}
    </section>
  `).join('') + `
    <div class="pie-relato">
      <button class="btn-iniciar" onclick="volverAlMenu()">← Volver a todos los relatos</button>
    </div>
  `;

  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && enLectura) {
        activarEscena(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.escena').forEach(escena => observer.observe(escena));

  const primera = document.querySelector('.escena');
  if (primera) activarEscena(primera);
}

// Regresar del lector al menú de relatos
function volverAlMenu() {
  if (!enLectura) return;
  enLectura = false;

  // Detener audio suavemente
  clearInterval(fadeInterval);
  canales.forEach(c => { c.pause(); c.volume = 0; });
  urlActual = "";
  document.getElementById('pista-actual').textContent = muteado ? 'Lectura silenciosa' : 'Elige un relato';

  // Restaurar colores base
  document.documentElement.style.setProperty('--bg', '#0c0b0e');
  document.documentElement.style.setProperty('--accent', '#d97736');

  // Mostrar navbar y menú
  document.getElementById('navbar').classList.remove('nav-oculta');
  document.getElementById('btn-volver').classList.add('oculto');
  document.getElementById('vista-lector').classList.add('oculto');
  document.getElementById('vista-menu').classList.remove('oculto');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navbar inteligente: desaparece al bajar en la lectura, reaparece al subir o mover el mouse arriba
window.addEventListener('scroll', () => {
  if (!enLectura) return;
  const scrollActual = window.scrollY;
  const navbar = document.getElementById('navbar');

  if (scrollActual > ultimoScroll && scrollActual > 120) {
    navbar.classList.add('nav-oculta');
    document.getElementById('panel-buscador').classList.remove('abierto');
  } else {
    navbar.classList.remove('nav-oculta');
  }
  ultimoScroll = scrollActual;
});

document.addEventListener('mousemove', (e) => {
  if (enLectura && e.clientY < 70) {
    document.getElementById('navbar').classList.remove('nav-oculta');
  }
});

// Motor de Crossfade y Escenas
function crossfadeAudio(nuevaUrl, titulo) {
  if (!iniciado || muteado || !nuevaUrl || nuevaUrl === urlActual) return;
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

  if (!muteado) {
    crossfadeAudio(el.dataset.audio, el.dataset.titulo);
  }
}

function toggleMute() {
  muteado = !muteado;
  document.getElementById('btn-mute').textContent = muteado ? 'Activar sonido' : 'Silenciar';

  if (muteado) {
    canales.forEach(c => { c.volume = 0; c.pause(); });
    document.getElementById('pista-actual').textContent = 'En silencio';
  } else if (enLectura) {
    const escenaActiva = document.querySelector('.escena.activa') || document.querySelector('.escena');
    if (escenaActiva) {
      urlActual = "";
      crossfadeAudio(escenaActiva.dataset.audio, escenaActiva.dataset.titulo);
    }
  } else {
    document.getElementById('pista-actual').textContent = 'Elige un relato';
  }
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
  muteado = false;
  document.getElementById('btn-mute').textContent = 'Silenciar';
  crossfadeAudio(url, titulo);
}

// Inicializar el menú al cargar
renderizarMenu();
