function alwaysEnablePip(videos) {
  videos.forEach(v => {
    v.disablePictureInPicture = false;
    console.log("Pip enabled");
  });
}

function overrideFlags() {
  const videos = document.querySelectorAll('video');
  alwaysEnablePip(videos);
}

overrideFlags();
const observer = new MutationObserver(overrideFlags);
observer.observe(document.documentElement, {childList: true, subtree: true});

