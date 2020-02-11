// Event Listener 1
document.querySelectorAll('.nav-link').forEach(el => {
  el.addEventListener('click', () => {
    event.preventDefault();
    console.log("Stop, Link.");
  })
})

// Event Listener 2
const funBus = document.querySelector('.intro img');

funBus.addEventListener('mouseover', () => {
  funBus.style.transform = 'scale(1.1) rotate(1deg)';
})

funBus.addEventListener('mouseleave', () => {
  funBus.style.transform = 'scale(1)';
  funBus.style.zIndex = '-1';
})

// Event Listener 3
const logoHead = document.querySelector('.logo-heading');

logoHead.addEventListener('dblclick', () => {
  logoHead.textContent = "Fun Fun Bus";
})

// Event Listener 4
logoHead.addEventListener('mouseleave', () => {
  logoHead.textContent = "Fun Bus";
})

// Event Listener 5
document.addEventListener('keyup', (e) => {
  console.log(e.keyCode);
  document.querySelector('header').style.background = "#17A2B8";
  logoHead.style.color = "#fff";
  logoHead.textContent = `Fun Bus #${e.keyCode}`;
})

// Event Listener 6
const letsGo = document.querySelector('.text-content h2');
const letsGoIMG = document.querySelector('.img-content');

letsGo.addEventListener('click', () => {
  letsGo.textContent = "Let's Gooooooo!";
  letsGoIMG.style.transition = '0.3s', 'ease-in';
  letsGoIMG.style.transform = 'rotate(1080deg) scale(0.1)';
  letsGoIMG.style.borderRadius = '5px';
});

// Event Listener 7
letsGoIMG.addEventListener('mouseleave', () => {
  letsGoIMG.style.transform = 'scale(1)';
})

// Event Listener 8
const boatTime = document.querySelector('.content-destination');

boatTime.addEventListener('click', (e) => {
  console.log(e);
  boatTime.style.background = "rebeccapurple";
  e.stopPropagation();
})

// Event Listener 9
const contHome = document.querySelector('.home');

contHome.addEventListener('click', (e) => {
  console.log(e);
  contHome.style.background = "dodgerblue";
})

// Event Listener 10
document.querySelectorAll('.btn').forEach(el => {
  el.addEventListener('click', (e) => {
    event.preventDefault();
    e.stopPropagation();
    console.log("Stop, Buttons.");
  })
})

// Event Listener 11
const foot = document.querySelector('.footer p');
window.addEventListener('resize', () => {
  foot.textContent = "Copyright Fun Bus 2020";
})

// Event Listener 12
const contPick = document.querySelector('.content-pick');

contPick.addEventListener('click', () => {
  var byebye = document.querySelector('.destination');
  
  event.stopPropagation();
  contPick.removeChild(byebye);
});