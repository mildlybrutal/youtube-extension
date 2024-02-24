let cinemaModeEnabled = false;

function enableCinemaMode() {
    const player = document.querySelector("video");

    if (player) {
        if (cinemaModeEnabled) {
            player.style.position = "";
            player.style.zIndex = "";
            player.style.width = "";
            player.style.height = "";
    } 
    else {
        player.style.position = "fixed";
        player.style.zIndex = "9999";
        player.style.width = "100%";
        player.style.height = "100vh";
        }
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.toggleCinemaMode) {
    cinemaModeEnabled = !cinemaModeEnabled;
    enableCinemaMode();
    }
});
