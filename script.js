// Change text color on mouseover and mouseout
const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseover', function () {
  hoverText.style.color = 'blue';
});
hoverText.addEventListener('mouseout', function () {
  hoverText.style.color = 'black';
});
