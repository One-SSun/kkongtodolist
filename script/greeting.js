const greetingForm = document.querySelector(".greeting-form");
const greetingInput = document.querySelector(".greeting input");
const greetingH1 = document.querySelector(".greeting h1");
const HIDDEN = "hidden";
const USER_NAME_KEY = "userName";


function greetingSubmit(event){
    event.preventDefault();
    greetingForm.classList.add(HIDDEN);
    const userName = greetingInput.value;
    localStorage.setItem(USER_NAME_KEY, userName);
    greetingPaint(userName);
}

function greetingPaint(userName){ 
    const greetVerTime = ["morning", "afternoon", "evening"]
    const nowTime = new Date().getHours();
    if(nowTime >= 9 && nowTime < 12){
        greetingH1.innerText = `Good ${greetVerTime[0]}, ${userName}`;
    }else if(nowTime >= 12 && nowTime <= 17){
        greetingH1.innerText = `Good ${greetVerTime[1]}, ${userName}`;
    }else{
        greetingH1.innerText = `Good ${greetVerTime[2]}, ${userName}`;
    }
    greetingH1.classList.remove(HIDDEN);
}

const savedUserName = localStorage.getItem(USER_NAME_KEY);
if(savedUserName === null){
    greetingForm.classList.remove(HIDDEN);
    greetingForm.addEventListener("submit", greetingSubmit);
}else{
    greetingPaint(savedUserName);
}


