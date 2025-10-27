 // Función para crear corazones flotantes
        function createHearts() {
            const colors = ['#ff0000ff'];
                //, '#05d9e8', '#d1f7ff', '#ffcc00', '#ff6ec7', '#ff8e8e', '#9d4edd', '#ff5e00'];
            
            setInterval(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                
                // Tamaño aleatorio
                const size = Math.random() * 20 + 10;
                heart.style.width = size + 'px';
                heart.style.height = size + 'px';
                
                // Color aleatorio
                const color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.backgroundColor = color;
                
                // Posición inicial aleatoria
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                
                // Animación
                heart.style.animation = `float ${Math.random() * 6 + 4}s linear forwards`;
                
                document.body.appendChild(heart);
                
                // Eliminar el corazón después de la animación
                setTimeout(() => {
                    heart.remove();
                }, 10000);
            }, 300);
        }
        
        // Iniciar corazones flotantes
        //createHearts();


       
        // Array de frases de amor cortas con temática de flores amarillas
        const lovePhrases = [
      "🌙 Mi luna",
        "🌌 Mi universo",
        "🌃 Mi cielo",
        "🌍 Mi mundo",
        "🌠 Mi lucero",
        "❤️ Mi vida",
        "💖 Mi corazón",
        "✨ Mi todo",
        "👑 Mi sultana",
        "🕊️ Mi paz",
        "🍀 Mi suerte",
        "💫 Mi constelación",
        "✨ Mi deseo",
        "💖 Mi querer",
        "😇 Mi ángel",
        "💎 Mi tesoro",
        "🎶 Mi melodía",
        "🌅 Mi amanecer",
        "🌊 Mi océano",
        "💭 Mi sueño"
        ];

        // Colores vibrantes para las frases
        const colors = [
            '#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE',
            '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE',
            '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40',
            '#FF6E40', '#FF5252', '#FF8A80', '#FF80AB', '#EA80FC'
        ];

        // Función para crear la lluvia de frases
        function createLoveRain() {
            const container = document.getElementById("loveRain");
            
            // Crear frases continuamente
            setInterval(function() {
                if (document.hidden || !document.hasFocus()) return; // Pausar cuando la pestaña no está activa
                
                const phraseElement = document.createElement("div");
                phraseElement.className = "love-phrase";
                
                // Seleccionar una frase aleatoria
                const randomPhrase = lovePhrases[Math.floor(Math.random() * lovePhrases.length)];
                phraseElement.textContent = randomPhrase;
                
                // Posición horizontal aleatoria
                const leftPosition = Math.random() * 70;
                phraseElement.style.left = leftPosition + "vw";
                
                // Color aleatorio
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                phraseElement.style.color = randomColor;
                
                // Tamaño aleatorio
                const size = 30 + Math.random() * 20;
                phraseElement.style.fontSize = size + "px";
                phraseElement.style.fontWeight = 'bold';
                
                // Velocidad de caída aleatoria
                const fallDuration = 5 + Math.random() * 10;
                phraseElement.style.animation = "fall " + fallDuration + "s linear";
                
                container.appendChild(phraseElement);
                
                // Eliminar el elemento después de que termine la animación
                setTimeout(function() {
                    if (phraseElement.parentNode === container) {
                        container.removeChild(phraseElement);
                    }
                }, fallDuration * 1000);
                
            }, 500); // Crear una nueva frase cada 500ms
        }


        // --- CÓDIGO NUEVO PARA EL SLIDESHOW DE FONDO ---

     // Generar las rutas de las imágenes del 1 al 77
const imagenesDeFondo = [];
for (let i = 1; i <= 76; i++) {
  // Añadir las rutas a la lista de imágenes
  imagenesDeFondo.push(`img/slideshow/foto${i}.jpg`);
}

let indiceActual = 0;

function cambiarFondo() {
  // Cambia la imagen de fondo del body
  document.body.style.backgroundImage = `url('${imagenesDeFondo[indiceActual]}')`;

  // Pasa a la siguiente imagen
  indiceActual++;

  // Si llega al final de la lista, vuelve al principio para crear el bucle
  if (indiceActual >= imagenesDeFondo.length) {
    indiceActual = 0;
  }
}

function iniciarSlideshow() {
  // Llama a la función una vez al inicio para que no haya que esperar 7 segundos por la primera foto
  cambiarFondo();
  // Establece el intervalo para que cambie cada 7 segundos (7000 milisegundos)
  setInterval(cambiarFondo, 4000);
}
        //createLoveRain();
