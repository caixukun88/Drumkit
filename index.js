function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.currentTime = 0; // Rewind to the beginning
    audio.play();
  }
  // Function to play the audio based on the passed ID
  function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.currentTime = 0;
    audio.play();
  }
  // Add event listener to the document for keydown event
  document.addEventListener('keydown', function(event) {
    switch (event.key.toLowerCase()) {
      case 'w':
        playAudio('audio-w');
        break;
      case 'a':
        playAudio('audio-a');
        break;
      case 's':
        playAudio('audio-s');
        break;
      case 'd':
        playAudio('audio-d');
        break;
      case 'j':
        playAudio('audio-j');
        break;
      case 'k':
        playAudio('audio-k');
        break;
      case 'l':
        playAudio('audio-l');
        break;
      default:
        break;
    }
  });