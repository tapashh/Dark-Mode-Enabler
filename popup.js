document.getElementById('enableDarkMode').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.insertCSS({
        target: { tabId: tabs[0].id },
        files: ['dark-mode.css']
      });
    });
  });
  
  document.getElementById('disableDarkMode').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.removeCSS({
        target: { tabId: tabs[0].id },
        files: ['dark-mode.css']
      });
    });
  });
  