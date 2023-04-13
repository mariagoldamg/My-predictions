const btn = document.querySelector (`#btn`);
const par = document.querySelector(`#show`);
const predictions = [
    `Important news will come very soon.`,
    `A time of doubt and hesitation has come for you. But don't worry - everything will work out!`,
    `You are on the right track! Do not stop!`,
    `Expect a surprise. Very soon!`,
    `You will soon find the lost thing!`,
    `Your wish will come true this week.`
]

btn.addEventListener(`click`,()=>{
    let randomPred = predictions[Math.floor(Math.random()*predictions.length)];
    par.style.display = `block`;
    par.textContent = randomPred;
})

gsap.from ("#btn", {
    opacity:0,
    y:-800,
    duration:2
})
