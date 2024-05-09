function countdown(endDate) {
    //  current date and time
    const now = new Date().getTime();

    //difference between the end date and the current date
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = difference % 1000;

    return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
}

const endDate = new Date("2024-5-21").getTime();
setInterval(function () {
    const remainingTime = countdown(endDate);
    document.querySelector(
        "#days"
    ).innerHTML = ` ${remainingTime.days}`;
    document.querySelector(
        "#hours"
    ).innerHTML = `  ${remainingTime.hours}`;
    document.querySelector(
        "#minuets"
    ).innerHTML = ` ${remainingTime.minutes}`;
    document.querySelector(
        "#seconds"
    ).innerHTML = ` ${remainingTime.seconds}`;
}, 1000);