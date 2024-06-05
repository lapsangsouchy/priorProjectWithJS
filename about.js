// Add dynamic list items
document.getElementById('addItemButton').addEventListener('click', function () {
  const listInput = document.getElementById('listInput').value;
  if (listInput.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = listInput;
    document.getElementById('dynamicList').appendChild(li);
    document.getElementById('listInput').value = ''; // Clear the input
  }
});

// Show placeholder data
const placeholderData = ['Cool', 'All Star Code Certified', 'FDA Approved'];

document
  .getElementById('placeholderDataButton')
  .addEventListener('click', function () {
    const dynamicList = document.getElementById('dynamicList');
    // Clear existing list items
    dynamicList.innerHTML = '';
    // Add placeholder items
    placeholderData.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      dynamicList.appendChild(li);
    });
  });
