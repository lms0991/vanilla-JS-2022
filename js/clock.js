const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); //Date 생성자 [New Date()] : 시간을 나타내는 Date 객체를 생성하는 생성자
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
} //getHours~... 현재 시간,분,초 표시
getClock();
setInterval(getClock, 1000);
