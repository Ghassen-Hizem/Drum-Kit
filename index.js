
document.addEventListener('keydown', (event) => {
    var key = event.key;
   switch (key) {
    case 'a' :
        var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_clap.wav');
        audio.play()
        document.getElementById('a').classList.add('pressed_drum')
        
        break;
        case 's' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_hihat.wav');
        audio.play()
        break;
        case 'd' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_kick.wav');
        audio.play()
        break;
        case 'f' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_openhat.wav');
        audio.play()
        break;
        case 'g' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_boom.wav');
        audio.play()
        break;
        case 'h' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_ride.wav');
        audio.play()
        break;
        case 'j' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_snare.wav');
        audio.play()
        break;
        case 'k' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_tom.wav');
        audio.play()
        break;
        case 'i' :
      var audio = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_tink.wav');
        audio.play()
        break;
   }
   



  }, false);