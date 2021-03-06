let videoStream = undefined as any

export const openCamera = () => {
  // overwrite getUserMedia attribute for some unsupportable browsers
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function (
      constraints: MediaStreamConstraints,
    ) {
      // get getUserMedia if it has
      const getUserMedia =
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia

      // or, return Error
      if (!getUserMedia) {
        return Promise.reject(
          new Error('getUserMedia is not implemented in this browser'),
        )
      }
      // then wrap Promise for the old api navigator.getUserMedia
      return new Promise(function (resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject)
      })
    }
  }

  return navigator.mediaDevices
    .getUserMedia({ audio: false, video: true })
    .then(function (stream: MediaStream | Blob) {
      videoStream = stream
      const video = document.querySelector('video') as HTMLVideoElement

      if ('srcObject' in video) {
        video.srcObject = stream
      } else {
        // If there is no srcObject in old browsers.[avoid use it in new browsers, cs it's adopted.]
        video.src = window.URL.createObjectURL(stream as Blob)
      }

      video.onloadedmetadata = function () {
        video.play()
      }
    })
    .catch(function (err) {
      console.log(err.name + ': ' + err.message)
    })
}

export const closeCamera = () => {
  if (videoStream) {
    console.log(videoStream.getTracks())
    videoStream.getTracks()[0].stop()
  }
}
