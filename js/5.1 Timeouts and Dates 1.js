const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setTimeout(sayHello, 5000); //5초뒤에 한번만 실행
