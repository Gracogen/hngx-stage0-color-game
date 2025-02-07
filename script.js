function updateUTCTime() {
    const utcTimeElement = document.getElementById('utc-time');
    const now = new Date();
    utcTimeElement.textContent = now.toUTCString();
  }
  
  // Update UTC time on page load
  updateUTCTime();
  