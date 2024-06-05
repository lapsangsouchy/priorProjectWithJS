document.getElementById('displayButton').addEventListener('click', function () {
  const userInput = document.getElementById('userInput').value;
  document.getElementById('displayArea').textContent = userInput;
});
