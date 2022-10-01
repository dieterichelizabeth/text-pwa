const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // add the deferredPrompt property with the value of the event!
  window.deferredPrompt = event;

  // Keep button visible!
  butInstall.classList.toggle("hidden", false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  // if the window.deferredPrompt property is undefined/null/"", return
  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  // set the property to null
  window.deferredPrompt = null;

  // Hide Button!
  butInstall.classList.toggle("hidden", true);
});

// Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // set the property to null
  window.deferredPrompt = null;
});
