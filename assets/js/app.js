const randomBtn = document.querySelector('.random__btn');
const body = document.body;
const btn = document.querySelector('.btn');

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  };
  return color;
};

randomBtn.addEventListener('click', (e) => {
  body.style.backgroundColor = randomColor()
  btn.style.backgroundColor = randomColor()
});




