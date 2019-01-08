const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60)*360) + 90;

    const hours = now.getHours();
    const hoursDegree = ((hours/12 ) * 360) + 90;
    // console.log(hoursDegree);

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60) * 360) + 90;
    // console.log(minutesDegree);

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

}
setInterval(setDate, 1000);

  