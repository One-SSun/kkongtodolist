const audioContainer = document.querySelector("#audioContainer");
const btnPlay = document.querySelector(".btnPlay");
const btnStop = document.querySelector(".btnStop");
const audioNextBtn = document.querySelector(".btnNext");


function playAudio(){
    audioContainer.volume = 0.5; 
    audioContainer.loop = true; 
    audioContainer.play();
}

function stopAudio(){
    audioContainer.pause();
}

function loadAudio(){
    const source = document.querySelector("#audioSource");
    source.src = "audio/1.mp3";
    audioContainer.load();
    playAudio();
    
}


btnPlay.addEventListener("click", loadAudio);
btnStop.addEventListener("click", stopAudio);
