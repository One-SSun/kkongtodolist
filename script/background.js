const backgroundImg = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]
const randomNum = Math.floor(Math.random() * backgroundImg.length);
document.body.style.backgroundImage = `linear-gradient(rgba(212, 158, 158, 0.2), rgba(212, 158, 158, 0.2)), url(img/${backgroundImg[randomNum]})`;

const fontColor = document.querySelector(".wrapper");
if(randomNum === 0 || randomNum === 2){
    fontColor.style.color = "#Fbc2c2";
}else if(randomNum === 3 || randomNum === 4 || randomNum === 6){
    fontColor.style.color = "#FFE6B4";
}

