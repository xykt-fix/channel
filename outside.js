<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>M3U8 Player Outside Safari</title>
  <!-- Load hls.js from CDN -->
  <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
</head>
<body>

  <video id="videoPlayer" controls width="640" height="360"></video>

  <script>
    var video = document.getElementById('videoPlayer');
    var videoSrc = 'YOUR_STREAM_URL.m3u8';

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        video.play();
      });
    } 
    // Fallback for Safari (native support)
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', function () {
        video.play();
      });
    }
  </script>

</body>
</html>
