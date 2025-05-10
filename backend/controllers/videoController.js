// const asyncHandler = require('express-async-handler');
// const Video = require('../models/Video');


// const getVideos = asyncHandler(async (req, res) => {
//   const videos = await Video.find().sort({ createdAt: -1 });
//   res.json(videos);
// });

// // const uploadVideo = asyncHandler(async (req, res) => {
// //   const { title } = req.body;
// //   const videoUrl = req.file.path;

// //   const video = await Video.create({
// //     title,
// //     videoUrl
// //   });

// //   res.status(201).json(video);
// // });



// const uploadVideo = asyncHandler(async (req, res) => {
//   const { title } = req.body;


//   if (!req.file) {
//     res.status(400).json({ message: 'No video file uploaded' });
//     return;
//   }

//   // Force HTTPS when creating the video URL
//   // const videoUrl = `${req.protocol === 'http' ? 'https' : req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}`;
// // const videoUrl = `https://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}`;
//   const videoUrl = `https://${req.get('host')}/uploads/videos/${req.file.filename}`;


//   // Save to database
//   const video = await Video.create({
//     title,
//     videoUrl,
//   });

//   res.status(201).json(video);
// });




// const deleteVideo = asyncHandler(async (req, res) => {
//   const video = await Video.findByIdAndDelete(req.params.id);
//   if (video) {
//     res.json({ message: 'Video removed' });
//   } else {
//     res.status(404);
//     throw new Error('Video not found');
//   }
// });

// module.exports = {
//   getVideos,
//   uploadVideo,
//   deleteVideo
// };
const asyncHandler = require('express-async-handler');
const Video = require('../models/Video');

const getVideos = asyncHandler(async (req, res) => {
  const videos = await Video.find().sort({ createdAt: -1 });
  res.json(videos);
});

const uploadVideo = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!req.file) {
    res.status(400).json({ message: 'No video file uploaded' });
    return;
  }

  // Generate the secure video URL
  const videoUrl = `https://${req.get('host')}/uploads/videos/${req.file.filename}`;

  // Save to database
  const video = await Video.create({
    title,
    videoUrl,
  });

  res.status(201).json(video);
});

const deleteVideo = asyncHandler(async (req, res) => {
  const video = await Video.findByIdAndDelete(req.params.id);
  if (video) {
    res.json({ message: 'Video removed' });
  } else {
    res.status(404);
    throw new Error('Video not found');
  }
});

module.exports = {
  getVideos,
  uploadVideo,
  deleteVideo,
};

