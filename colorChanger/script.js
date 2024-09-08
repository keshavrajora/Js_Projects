const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const color = e.target.id; 
    
    switch (color) {
      case 'grey':
      case 'white':
      case 'blue':
      case 'yellow':
        body.style.backgroundColor = color;
        break;
      default:
        console.log('Invalid color');
    }
  });
});


