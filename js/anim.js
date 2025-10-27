var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con la letra de "Habitual" y tiempos RE-AJUSTADOS (Nivel 5)
var lyricsData = [
  { text: "", time: 0 },
  { text: "Flowers open when they feel the sunlight", time: 11.5 },
  { text: "Moonrise, tide change, right before our eyes", time: 15.2 },
  { text: "Aggressive but softly, you place your lips on my lips", time: 19.1 },
  { text: "We're each other's vice", time: 24.0 },
  { text: "Our feelings, they go deep, deeper than the touching", time: 26.2 },
  { text: "Deeper than the ocean, so we never rushing through", time: 30.2 },
  { text: "Our days or our nights, ain't no repercussions", time: 34.3 },
  { text: "Never get enough, I'm only for your consumption", time: 38.2 },
  { text: "", time: 41.0 }, // Pausa
  { text: "Always rain the most in April", time: 42.1 },
  { text: "Every scale needs to be stable", time: 44.2 },
  { text: "Earth keeps spinnin' around, we're breathin'", time: 46.2 },
  { text: "So thankful", time: 49.0 },
  { text: "My love for you's habitual, yeah", time: 50.3 },
  { text: "Not for a moment, but forever", time: 54.5 },
  { text: "Know it sounds untraditional, oh, yeah", time: 58.2 },
  { text: "Never ungrateful for it", time: 61.7 },
  { text: "That's how we both want it", time: 63.5 },
  { text: "Habitual", time: 65.4 },
  { text: "", time: 67.8 }, // Pausa
  { text: "Can't nobody keep me like you", time: 69.0 },
  { text: "Call it unconventional", time: 72.2 },
  { text: "Our love is habitual, yeah", time: 74.3 },
  { text: "", time: 77.2 }, // Pausa (Vocalización "La da da...")
  { text: "Just to think that we've been out here this whole time", time: 83.1 },
  { text: "Workin' through the seasons", time: 86.3 },
  { text: "Never crossed paths 'til we had a reason", time: 88.2 },
  { text: "Now let's fast-forward, look up", time: 91.3 },
  { text: "A whole new perspective for life", time: 93.1 },
  { text: "", time: 94.4 }, // Pausa
  { text: "Always rain the most in April", time: 95.3 },
  { text: "Every scale needs to be stable", time: 97.2 },
  { text: "Earth keeps spinnin' around, we're breathin'", time: 99.2 },
  { text: "So thankful", time: 102.0 },
  { text: "My love for you's habitual, yeah", time: 103.2 },
  { text: "Not for a moment, but forever", time: 107.2 },
  { text: "Know it sounds untraditional, oh, yeah", time: 110.8 },
  { text: "Never ungrateful for it", time: 114.3 },
  { text: "That's how we both want it", time: 116.1 },
  { text: "Habitual", time: 118.0 },
  { text: "", time: 120.7 }, // Pausa
  { text: "Can't nobody keep me like you", time: 121.7 },
  { text: "Call it unconventional", time: 124.8 },
  { text: "Our love is habitual, yeah", time: 127.2 },
  { text: "", time: 130.5 }, // Outro (Vocalización "La da da...")
];

// Animar las letras (Lógica de la versión anterior)
var currentLineText = "";

function updateLyrics() {
  var time = audio.currentTime;

  var currentLine = lyricsData.findLast(
    (line) => time >= line.time
  );

  if (currentLine) {
    var fadeInDuration = 0.2;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;

    if (currentLine.text !== currentLineText) {
      lyrics.innerHTML = currentLine.text;
      currentLineText = currentLine.text;
    }
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
    currentLineText = "";
  }
}

setInterval(updateLyrics, 50);

// --- Detectar cuando la canción está a punto de terminar ---
audio.addEventListener("timeupdate", function() {
  // Comprobar si la canción está cerca de terminar
  if (audio.currentTime >= audio.duration - 5) {
    // Espera 5 segundos antes de reiniciar la canción
    setTimeout(function() {
      audio.currentTime = 0; // Reinicia la canción
      audio.play(); // Reproduce la canción
    }, 5000); // 5 segundos de retraso
  }
});

// --- El resto de tu código (función del título) ---
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

setTimeout(ocultarTitulo, 180000);