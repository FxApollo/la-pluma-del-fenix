// ==========================================
// 1. BIBLIOTECA DE RELATOS (Edita aquí)
// ==========================================
const RELATOS = [
  {
    id: "plata",
    titulo: "Plata",
    etiqueta: "Fábula • 4 escenas",
    sinopsis: "Marcado desde su nacimiento por una profecía de muerte temprana, un joven lobo aprende bajo un eclipse que el mañana no debe devorar el presente.",
    colorTema: "#94a3b8",
    escenas: [
      {
        titulo: "I. La Profecía",
        pistaNombre: "Satie - Gnossienne No. 1 (Piano)",
        audioUrl: "https://archive.org/download/ErikSatieGnossienneNo.1/Erik%20Satie%20-%20Gnossienne%20No.%201.mp3",
        bg: "#0b101b",
        accent: "#94a3b8",
        parrafos: [
          "Nació bajo luna llena, la época en la que se recibían las profecías, así que se esperaba que el cachorro fuera un lobo líder, un lobo único… pero el lobo chamán ya había hablado: el lobezno moriría en 3 años, menos de la mitad del promedio de vida de cualquier lobo. Solo esa era la profecía.",
          "Pese a ello, creció como cualquier otro cachorro en la manada, exceptuando las veces que los demás cuchicheaban “muerte” o “maldito”, o cómo a veces, en silencio, la lástima aparecía en los ojos de quien lo observaba; a veces incluso en los de su propia madre, quien luego de noche aullaba especialmente fuerte a la luna.",
          "Ya al año se dio cuenta plenamente de su maldición. Era inevitable: moriría. Se había negado a creerlo completamente —quizá se confundió el chamán, quizá la profecía fallaría—, pero descorazonado vio cómo se cumplían una a una todas las demás profecías: vio cómo el invencible Patafuerte se quebraba ambas patas en una cacería, también vio cuando Ojogris, el alfa, se echó a dormir exactamente una luna llena y nunca más despertó…"
        ]
      },
      {
        titulo: "II. El Risco",
        pistaNombre: "Chopin - Preludio en Mi menor, Op. 28 No. 4",
        audioUrl: "https://archive.org/download/ChopinPreludeOp.28No.4InEMinor/Chopin%20-%20Prelude%20Op.%2028%20No.%204%20in%20E%20Minor.mp3",
        bg: "#0f0e13",
        accent: "#7c8594",
        parrafos: [
          "…Y la vida comenzó a saber más amarga a cada sorbo, y el mañana oscurecía todo hoy.",
          "Cada vez veía con mayor resentimiento a la luna, aquella que lo había maldecido. El viento que antes había amado tanto ya solo le recordaba el frío de la muerte, pero sobre todo le atormentaba el hecho de crear lazos con el resto: pronto se iría para siempre. ¿Cómo amarlos solo para dejarlos sufriendo? —Qué vacía y hueca existencia —se dijo.",
          "Decidió entonces retar al destino: no moriría a los 3 años, moriría ahora. Y una noche de luna llena, mientras todos se acercaban a escuchar las profecías del chamán, se marchó. Subiría el acantilado y desde allí saltaría.",
          "Una sombra lo observó desde que dejó el territorio y lo siguió mientras cruzaba el río, mientras escalaba el acantilado, no muy lejos para no perderlo de vista, ni muy cerca, hasta cuando ya cansado el lobo llegó al risco y confundido miró al abismo.",
          "—Queda —susurró la sombra—. Quédate.",
          "—¿Madre? —dijo sorprendido el lobo por la distancia que esta había andado.",
          "—Solo hoy quédate, Plata, aunque la luna llena esté nublada, ves cómo el viento nos sopla.",
          "—No importa cuántos hoy me quede —dijo el lobo—, mis mañanas no son ya ni la mitad de las de los demás, y madre, tú me verías morir mientras los hijos de los otros lobos aún aullarían. No quiero eso para ti, porque lo entiendo, sé qué es que lo que una vez fue bello se vuelva condena… Mientras menos te acostumbres a mí, mejor.",
          "—Nunca me dejaría de acostumbrar, ni hoy, ni hace 2 años, ni dentro de mil; no pienso en ello, ni cuando recibí la profecía, ni cuando crecías, ni cuando con miedo te he visto venir al acantilado. No sé de tus mañanas, hijo mío, pero hoy, hoy hay Luna, y ¿sientes lo suave que el viento te toca? Siempre creí que era una forma en que Ella nos toca. Y durante cada luna llena, sabiendo que no podrías vivir más de 3 años, solo le rogaba a la luna que saborearas cada hoy. He venido solo para pedirte que te quedes hoy, sonriamos y aullemos solo hoy, solo en esta luna."
        ]
      },
      {
        titulo: "III. El Eclipse",
        pistaNombre: "Debussy - Clair de Lune",
        audioUrl: "https://archive.org/download/ClairDeLune_201305/Clair%20de%20Lune.mp3",
        bg: "#141022",
        accent: "#eab308",
        parrafos: [
          "—Si la luna te escuchara, ¿por qué nunca respondió?",
          "Sin respuestas, y sabiendo que ni él, ni su madre, ni el chamán y quizá ni la Luna las tenían, el joven lobo aulló y aulló con el lamento que había guardado en su corazón durante todo ese tiempo, y el eco de su lamento llenó el bosque.",
          "Entonces, la luna llena se oscureció y se volvió un perfecto anillo… ¡un eclipse! Y el viento sopló con más fuerza, empujándolo de vuelta a lo seguro, pero ni un paso más.",
          "Y los dos lobos vieron atónitos esto, y se dejaron acariciar por el viento que secó sus lágrimas y aullaron al eclipse; pero dejó de ser de lamento, ya que ya no importaban ni las preguntas ni las respuestas...",
          "Y el eco de sus aullidos fue acompañado por diferentes aullidos desde distintas partes del bosque."
        ]
      },
      {
        titulo: "IV. Solo Hoy",
        pistaNombre: "Chopin - Nocturno Op. 9 No. 2",
        audioUrl: "https://archive.org/download/cd_nocturnes_frederic-chopin_0/disc1/02.%20Fr%C3%A9d%C3%A9ric%20Chopin%20-%20Nocturne%20in%20E-flat%20major%2C%20Op.%209%2C%20No.%202.mp3",
        bg: "#18120e",
        accent: "#e07a3f",
        parrafos: [
          "—Solo hoy no me iré —dijo el lobo a su madre—. Solo hoy la luna habla... y aunque no lo hiciese, y aunque no hubiese ningún eclipse y aunque no hubiese nunca más Luna... solo hoy hay viento… Soy libre... el mañana ya no me devora...",
          "Al día siguiente, mientras corría el agradable viento por su pelaje y veía cómo algunas nubes se parecían a la luna en forma de anillo, se repitió a sí mismo: solo hoy no.",
          "El lobo murió exactamente a los 3 años, defendiendo a la manada de un grupo de humanos. Fue el más fiero combatiente; dicen que por él se fueron los humanos y nunca más volvieron. Dicen que siempre lo veían feliz disfrutando el viento, o aullando alegre a la luna, o mostrando a los demás lobos cómo sentir el viento, porque ese único e irrepetible viento correría solo Hoy."
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
