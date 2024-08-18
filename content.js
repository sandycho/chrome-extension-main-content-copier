chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "copyMainContent") {
      copyMainContent();
    }
  });
  
  function copyMainContent() {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      const text = mainElement.innerText;
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showNotification('Main content copied to clipboard!');
    } else {
      showNotification('No <main> tag found on this page.', 'error');
    }
  }
  
  function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
      border-radius: 20px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      color: white;
      z-index: 9999;
      transition: opacity 0.3s ease-in-out;
    `;
    
    // Set background color based on notification type
    if (type === 'error') {
      notification.style.backgroundColor = '#ff4d4d';
    } else {
      notification.style.backgroundColor = '#4CAF50';
    }
  
    // Add notification to the page
    document.body.appendChild(notification);
  
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }