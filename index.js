
document.addEventListener('keydown', (event) => {
    var key = event.key;
   switch (key) {
    case 'a' :
        var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_clap.wav');
        audio.play()
        document.getElementById('a').classList.add('pressed_drum')
        setTimeout(() => {
          document.getElementById('a').classList.remove('pressed_drum')
        },100)
        
        break;
        case 's' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_hihat.wav');
        audio.play()
        document.getElementById('s').classList.add('pressed_drum')
        setTimeout(() => {
          document.getElementById('s').classList.remove('pressed_drum')
        },100)
        break;
        case 'd' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_kick.wav');
        audio.play()
        document.getElementById('d').classList.add('pressed_drum')
        setTimeout(() => {
          document.getElementById('d').classList.remove('pressed_drum')
        },100)
        break;
        case 'f' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_openhat.wav');
        audio.play()
        document.getElementById('f').classList.add('pressed_drum')
        setTimeout(() => {
          document.getElementById('f').classList.remove('pressed_drum')
        },100)
        break;
        case 'g' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_boom.wav');
        audio.play()
        document.getElementById('g').classList.add('pressed_drum')
        setTimeout(() => {
          document.getElementById('g').classList.remove('pressed_drum')
        },100)
        break;
        case 'h' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_ride.wav');
        audio.play()
        document.getElementById('h').classList.add('pressed_drum')
        setTimeout(() => {
          document.getElementById('h').classList.remove('pressed_drum')
        },100)
        break;
        case 'j' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_snare.wav');
        audio.play()
        document.getElementById('j').classList.add('pressed_drum')
        setTimeout(() => {
          document.getElementById('j').classList.remove('pressed_drum')
        },100)
        break;
        case 'k' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_tom.wav');
        audio.play()
        document.getElementById('k').classList.add('pressed_drum')
        setTimeout(() => {
          document.getElementById('k').classList.remove('pressed_drum')
        },100)
        break;
        case 'i' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_tink.wav');
        audio.play()
        document.getElementById('i').classList.add('pressed_drum')
        setTimeout(() => {
          document.getElementById('i').classList.remove('pressed_drum')
        },100)
        break;
   }
   



  }, false);