const buttons = document.querySelectorAll('.color-buttons button');
const colorPicker = document.getElementById('colorPicker');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.style.backgroundColor = button.getAttribute('data-color');
  });
});

colorPicker.addEventListener('input', () => {
  document.body.style.backgroundColor = colorPicker.value;
});
