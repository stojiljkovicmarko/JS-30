const secondsHand = document.querySelector(".second");
const minutesHand = document.querySelector(".minute");
const hoursHand = document.querySelector(".hour");

function getDegrees(time, division) {
    if(division === 60) {
        return (time / 60) * 360;
    } else {
        return (time / 12) * 360;
    }
}

function setDate() {
    const dateNow = new Date();

    const seconds = dateNow.getSeconds();
    const secondsDegrees = getDegrees(seconds, 60);

    const minutes = dateNow.getMinutes();
    const minutesDegrees = getDegrees(minutes, 60);

    const hours = dateNow.getHours();
    let hoursDegrees;
    if(minutesDegrees < 180) {
        hoursDegrees = getDegrees(hours, 12);
    } else {
        hoursDegrees = getDegrees(hours, 12) + 15;
    }

    // console.log(seconds);
    console.log(minutes);
    // console.log(hours);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);