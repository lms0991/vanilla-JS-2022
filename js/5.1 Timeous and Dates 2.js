const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); //Date 생성자 [New Date()] : 시간을 나타내는 Date 객체를 생성하는 생성자
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
} //getHours~... 현재 시간,분,초 표시
getClock();
setInterval(getClock, 1000);
