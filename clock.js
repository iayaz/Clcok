console.log("Clock by Ayaz");
const min =document.querySelector(".min_hand");
const hour = document.querySelector(".hour_hand");
const sec = document.querySelector(".second_hand");

function setDate(){
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ((second/60) * 360) + 90;
    sec.style.transform = `rotate(${secondDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((min/60)*360)+((second/60) * 360) + 90;
    min.style.transform = `rotate(${minuteDegrees}deg)`;

    const hr = now.getHours();
    const hourDegrees = ((hr / 12) * 360) + ((minute/60)*30) + 90;
    hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();