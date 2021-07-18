const countdownUpdated = () => {
  const timeLeft = new Date(new Date(2021, 6, 18, 23, 59, 59).getTime() - new Date().getTime())

  const objectTime = {
    days: String(timeLeft.getDay()).padStart(2, '0'),
    hours: String(timeLeft.getHours()).padStart(2, '0'),
    minutes: String(timeLeft.getMinutes()).padStart(2, '0'),
    seconds: String(timeLeft.getSeconds()).padStart(2, '0')
  };

  return objectTime;
};

const updateCountdown = (timeUpdated) => {
  const countdown = document.querySelector(".timer");

  countdown.querySelector("#days").innerHTML = timeUpdated.days;
  countdown.querySelector("#hours").innerHTML = timeUpdated.hours;
  countdown.querySelector("#minutes").innerHTML = timeUpdated.minutes;
  countdown.querySelector("#seconds").innerHTML = timeUpdated.seconds;
};

const startAnimation = () => {
  let timeLineAnimation = gsap.timeline();

  timeLineAnimation
    .from(".timer", {
      duration: 1,
      y: -100,
      opacity: 0,
      delay: 0.2,
      ease: "power3.out"
    })
    .from(".title-page", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.8")
    .from(".sub-title-page", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.8")
    .from(".svg-letter", {
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.8")
    .from(".title-form", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.8")
    .from(".sub-title-form", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.8")
    .from(".form-styled", {
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    })

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#section-01 .big-offer", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: { each: 0.2 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section-01"
    }
  });

  gsap.from("#section-02", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: { each: 0.2 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section-02"
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {

  setInterval(() => {
    const timeUpdated = countdownUpdated();
    updateCountdown(timeUpdated);
  }, 1000);

  document.addEventListener("submit", (event) => {
    event.preventDefault();

    const htmlInputEmail1 = document.getElementById("email-1");
    const htmlInputEmail2 = document.getElementById("email-2");

    if (htmlInputEmail1.value + htmlInputEmail2.value === "") {
      Toastify({
        text: "Insira uma e-mail válido",
        fontFamily: "Rubik, sans-serif",
        backgroundColor: "#EDC21A",
        padding: "24px 16px",
        offset: {
          x: 16, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 24 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        duration: 3000,
        className: "toast"
      }).showToast();
    } else {
      const htmlInputEmailChanged = htmlInputEmail1.value !== "" ?
        htmlInputEmail1 : htmlInputEmail2;

      localStorage.setItem("email", htmlInputEmailChanged.value);

      htmlInputEmailChanged.value = "";

      Toastify({
        text: "E-mail cadastrado!",
        backgroundColor: "#40c057",
        padding: "24px 16px",
        offset: {
          x: 16, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 24 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        duration: 3000,
        className: "toast"
      }).showToast();
    }
  });

  startAnimation();
});