document.addEventListener('DOMContentLoaded', function() {
    const toggleCinemaButton = document.getElementById('toggleCinema');

    toggleCinemaButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { toggleCinemaMode: true });
        });
    });
});