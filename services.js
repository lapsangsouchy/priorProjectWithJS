// Predefined YouTube links
const youtubeLinks = {
  Tutorials: 'https://www.youtube.com/embed/RllWJUvrxEY?si=EKO2Xdqj1XjG6p3j',
  'Production Assistance':
    'https://www.youtube.com/embed/ray8LsGvvgQ?si=Y9iYp07C66ZNWifc',
  'Rick Astley Distribution':
    'https://www.youtube.com/embed/dQw4w9WgXcQ?si=vNT7ON2IGu0tNiLd',
};

// Add event listener to dynamic list items
document
  .getElementById('servicesList')
  .addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      const videoLink = youtubeLinks[event.target.textContent];
      if (videoLink) {
        document.getElementById('videoIframe').src = videoLink;
      }
    }
  });
