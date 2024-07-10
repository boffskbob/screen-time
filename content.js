
function stopVideo() {
    const video = document.querySelector('video');
    if (video) {
        video.pause();
        console.log('Video paused');
    } else {
        console.log('No video element found');
    }
}

function onUrlChange() {
    if (window.location.href.includes('youtube.com/shorts')) {
        console.log('YouTube Shorts URL detected');
        stopVideo();
    }
}

// Listen for URL changes
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            stopVideo();
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });

// Initial check in case the script runs after the page has loaded
// console.log("script ran");
// stopVideo();