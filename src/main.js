const script = document.createElement("script");
script.setAttribute("src", chrome.runtime.getURL("streamer.js"));
document.documentElement.insertBefore(
  script,
  document.documentElement.firstChild,
);
