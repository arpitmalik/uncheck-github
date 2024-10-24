document.getElementById("uncheckViewed").addEventListener("click", () => {
  // Get the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTabId = tabs[0].id;

    // Execute the script in the active tab
    chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      function: () => {
        document.getElementsByName("viewed").forEach((ch) => {
          if (ch.checked) {
            ch.click();
          }
        });
      },
    });
  });
});
