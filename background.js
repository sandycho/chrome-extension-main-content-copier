chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "copyMainContent",
      title: "Copy Main Content",
      contexts: ["page"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "copyMainContent") {
      chrome.tabs.sendMessage(tab.id, {action: "copyMainContent"});
    }
  });