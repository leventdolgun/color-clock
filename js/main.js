clock();
setInterval(clock, 1000)

function clock() {
    let hour, minute, second;
    const date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    hour <= 9 ? hour = '0' + hour : hour;
    minute <= 9 ? minute = '0' + minute : minute;
    second <= 9 ? second = '0' + second : second;   
    document.querySelector('body').style.backgroundColor = '#' + hour + minute + second;
    document.getElementById('color').innerHTML = '#' + hour + minute + second;   

    document.getElementById('zaman').innerHTML = `${hour} : ${minute} : ${second}`;
}