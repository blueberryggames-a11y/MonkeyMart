function inFrame () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}
function botBrowser() {
  try {
    return navigator.webdriver
  } catch (e) {
      return true;
  }
}
function desktopBrowser() {
  try {
    const w= window.screen.width;
    return (w>= 800);
  } catch (e) {
    return false;
  }
  return false;
}
