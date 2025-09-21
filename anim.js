// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "they say", time: 8, duration: 4 },
  { text: "you know when you know ", time: 12, duration: 4 },
  { text: "so let's face it", time: 16, duration: 3.2 },
  { text: "you hide me at hello", time: 19.4, duration: 4.6 },
  { text: "Hesitation never helps", time: 23.6, duration: 3.2 },
  { text: "How could this be anything, anything else?", time: 27, duration: 6 },
  { text: "When", time: 31.5, duration: 1.3 },
  { text: "all I dream of is your eyes", time: 32.05, duration: 4.2 },
  { text: "All I long for is your touch", time: 37.2, duration: 3.8 },
  { text: "And, darling, something tells me", time: 41, duration: 1.9},
  { text: "that's enough, mmm", time: 43, duration: 3},
  { text: "You can say that I'm a fool", time: 47.7, duration: 2 },
  { text: "And I don't know very much", time: 51, duration: 3 },
  { text: "But I think they call this love", time: 54.7 , duration: 4},

  { text: "One smile, one kiss, two lonely hearts ", time: 64.01, duration: 4 },
  { text: "is all that it takes", time: 68.1, duration: 2 },
  { text: "Now, baby", time: 71.2, duration: 1 },
  { text: "you're on my mind every night, every day", time: 72.2, duration: 5 },
  { text: "every night, every day", time: 75.2, duration: 3.8 },  
  { text: "Good vibrations getting loud", time: 79, duration: 5 }, 
  { text: "How could this be anything, anything else?", time: 84, duration: 3 }, 
  { text: "When", time: 87.4, duration: 1.3 },
  { text: "all I dream of is your eyes", time: 89, duration: 3 },
  { text: "All I long for is your touch", time: 92.5, duration: 2.8 }, 
  { text: "And darling something tells me", time: 94, duration: 3 },
  { text: "that's enough, mmm", time: 98, duration: 4}, 
  { text: "You can say that I'm a fool", time: 102.6, duration: 3.4 }, 
  { text: "And I don't know very much", time: 106, duration: 2.4 }, 
  { text: "But I think they call this love", time: 109.1, duration: 6.7 }, 
  { text: "Oh, I think they call this love", time: 116.9, duration: 17 }, 


  { text: "What could this be?", time: 134.3, duration: 1.92 }, 
  { text: "Between you and me", time: 136.22, duration: 7.67 }, 
  { text: "All I dream of is your eyes", time: 144.89, duration: 2.3}, 
  { text: "All I long for is your touch", time: 147, duration: 3.85 }, 
  { text: "And, darling, something tells me, tells me it's enough, mmm", time: 151, duration: 6.2 }, 
  { text: "You could say that I'm a fool", time: 157, duration: 3 }, 
  { text: "And I don't know very much", time: 160.2, duration: 3.9 }, 
  { text: "But I think they call", time: 165.1, duration: 2.25 }, 
  { text: "Oh, I think they call", time: 167.35, duration: 3.65 }, 
  { text: "Yes, I think they call this love", time: 171, duration: 5 },
  { text: "This love", time: 176, duration: 5 }, 
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);