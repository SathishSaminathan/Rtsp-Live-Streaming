// rtsp://admin:123456@122.165.203.72:554/H264?ch=1&subtype=0

// rtsp://192.168.1.10:554/H264?ch=1&subtype=0&proto=Onvif

Stream = require("node-rtsp-stream");
stream = new Stream({
  name: ["name", "name"],
  streamUrl: [
    "rtsp://admin:123456@192.168.1.10:554/H264?ch=1&subtype=0&proto=Onvif"
    // "rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov"
  ],
  wsPort: 9999
  // fps: "24",
  // kbs: "2048k",
  // ffmpegOptions: {
  //   // options ffmpeg flags
  //   "-stats": "", // an option with no neccessary value uses a blank string
  //   "-r": 30 // options with required values specify the value after the key
  // }
});

// const onvif = require("node-onvif");

// // Create an OnvifDevice object
// let device = new onvif.OnvifDevice({
//   xaddr: "http://192.168.1.10/onvif/device_service",
//   user: "admin",
//   pass: "123456"
// });

// // Initialize the OnvifDevice object
// device
//   .init()
//   .then(() => {
//     // Get the UDP stream URL
//     let url = device.getUdpStreamUrl();
//     console.log(url);
//   })
//   .catch(error => {
//     console.error(error);
//   });
