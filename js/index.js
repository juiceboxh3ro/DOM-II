document.querySelectorAll('.nav-link').forEach(el => {
  el.addEventListener('click', (e)=> {
    event.preventDefault();
    console.log("no.");
  })
})

const funBus = document.querySelector('.intro img');

funBus.addEventListener('mouseover', ()=> {
  funBus.style.transform = 'scale(1.1)'
})