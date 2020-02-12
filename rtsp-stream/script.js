const videoElement = document.getElementById("video");
var canvas1 = document.getElementById("videoCanvas1");

// var ws = new WebSocket("ws://localhost:9999");

var player = new JSMpeg.Player("ws://localhost:9999", {
  canvas: canvas1,
  autoplay: true,
  audio: false,
  loop: true,
  preserveDrawingBuffer: true
});

setInterval(() => {
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", "CanvasAsImage.png");
  let dataURL = canvas1.toDataURL("image/png");
  let url = dataURL.replace(
    /^data:image\/png/,
    "data:application/octet-stream"
  );
  downloadLink.setAttribute("href", url);
  downloadLink.click();
}, 10000);

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("models"),
  faceapi.nets.faceExpressionNet.loadFromUri("models")
]).then(startVideo);

function startVideo() {
  navigator.getUserMedia(
    {
      video: {}
    },
    stream => (video.srcObject = stream),
    err => console.log(err)
  );
}

videoElement.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(videoElement);
  // document.body.append(canvas2)

  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    const resizedResults = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedResults);
    // faceapi.draw.drawFaceLandmarks(canvas, resizedResults);
    faceapi.draw.drawFaceExpressions(canvas, resizedResults);

    // const canvas2 = document.getElementById("imageCanvas");
    // canvas2.width = 578;
    // canvas2.height = 200;
    // const ctx = canvas2.getContext("2d");

    // ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    // if (detections.length != 0) {
    //   var sourceX = detections[0].landmarks._shift._x;
    //   var sourceY = detections[0].landmarks._shift._y;
    //   var sourceWidth = detections[0].landmarks.imageWidth;
    //   var sourceHeight = detections[0].landmarks.imageHeight;
    //   var destWidth = sourceWidth;
    //   var destHeight = sourceHeight;
    //   var destX = canvas2.width / 2 - destWidth / 2;
    //   var destY = canvas2.height / 2 - destHeight / 2;
    //   ctx.drawImage(
    //     video,
    //     sourceX,
    //     sourceY,
    //     sourceWidth,
    //     sourceHeight,
    //     destX,
    //     destY,
    //     destWidth,
    //     destHeight
    //   );
    //   // DownloadCanvasAsImage();
    //   // ctx.toDataURL('image/png')
    //   // window.open(canvas2.toDataURL("image/png"))
    // }
    // console.log(detections.length == 0);
    // console.log(canvas.toDataURL("png"));
  }, 100);

  function DownloadCanvasAsImage() {
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "CanvasAsImage.png");
    let canvas = document.getElementById("myCanvas");
    let dataURL = canvas2.toDataURL("image/png");
    let url = dataURL.replace(
      /^data:image\/png/,
      "data:application/octet-stream"
    );
    downloadLink.setAttribute("href", url);
    downloadLink.click();
  }
});
