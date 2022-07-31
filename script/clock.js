const clock = document.querySelector(".clock");

function realTimeHandler(){
    const today = new Date(); 
    const hours = String(today.getHours()).padStart(2, 0);
    const minutes = String(today.getMinutes()).padStart(2, 0);
    const seconds = String(today.getSeconds()).padStart(2, 0);

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

realTimeHandler();
setInterval(realTimeHandler, 1000);