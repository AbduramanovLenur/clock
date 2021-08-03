const time = document.querySelector('.time');

function fooTime() {

    let data = new Date();
    let hours = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours();
    let min = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes();
    let sec = data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds();

    time.textContent = `${hours} : ${min} : ${sec}`;

}

setInterval(fooTime, 1000);

//--------------------------------------------------------------------------------------

const h = document.querySelector('.hour');
const m = document.querySelector('.min');
const s = document.querySelector('.sec');
const deg = 6;


setInterval(clock, 1000);

function clock() {

    let data = new Date();
    let hh = data.getHours() * 30;
    let mm = data.getMinutes() * deg;
    let ss = data.getSeconds() * deg;

    h.style.transform = `rotate(${hh}deg)`;
    m.style.transform = `rotate(${mm}deg)`;
    s.style.transform = `rotate(${ss}deg)`;
}

