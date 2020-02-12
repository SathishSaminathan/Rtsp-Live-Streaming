// rtsp://192.168.1.10:554/H264?ch=1&subtype=0&proto=Onvif

Stream = require("node-rtsp-stream");
stream = new Stream({
  name: ["Ipcamera1", "name"],
  streamUrl: [
    "rtsp://admin:123456@192.168.1.10:554/H264?ch=1&subtype=0&proto=Onvif"
    // "rtsp://admin:123456@192.168.1.11:554/H264?ch=1&subtype=0&proto=Onvif"
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

// Get the STREAM URL rtsp://192.168.1.10:554/H264?ch=1&subtype=0&proto=Onvif
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

//   Discover ONVIF network cameras
// This sample code shows how to discover ONVIF network cameras.

// const onvif = require("node-onvif");

// console.log("Start the discovery process.");
// // Find the ONVIF network cameras.
// // It will take about 3 seconds.
// onvif
//   .startProbe()
//   .then(device_info_list => {
//     console.log(device_info_list.length + " devices were found.");
//     // Show the device name and the URL of the end point.
//     device_info_list.forEach(info => {
//       console.log("- " + info.urn);
//       console.log("  - " + info.name);
//       console.log("  - " + info.xaddrs[0]);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });
