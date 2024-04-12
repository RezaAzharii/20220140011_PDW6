function ShowPopup() {
    var infoPopup = document.querySelector('.infopopup');
    infoPopup.style.display = 'block';
}

function HidePopup() {
    var infoPopup = document.querySelector('.infopopup');
    infoPopup.style.display = 'none';
}

document.getElementById('popup').addEventListener('click', ShowPopup);

function ImageN() {
    alert("Image akan berubah jika rasio diabawah 600");
}
  
function VidN() {
    alert("Dancing and Chill");
}

document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("background-music");
    var muteButton = document.getElementById("mute-button");
    var isPlaying = true; // Variable to track the playing status

    muteButton.addEventListener("click", function() {
        if (isPlaying) {
            music.pause(); // Pause the music
            muteButton.innerHTML = '<i class="fas fa-solid fa-music"></i>'; // Change the icon to play
        } else {
            music.play(); // Play the music
            muteButton.innerHTML = '<i class="fas fa-solid fa-volume-mute"></i>'; // Change the icon to pause
        }
        isPlaying = !isPlaying; // Toggle the playing status
    });
});

