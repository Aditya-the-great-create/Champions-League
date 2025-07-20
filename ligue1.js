const videoSection = document.querySelector('section');

function getVideos() {
  fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU9eH7fXbdaGeFHfu-APAQNA&maxResults=10&key=AIzaSyC3pq1w5U2oWLmxr0ufNnbJcMGikYVlFOw')
    .then(res => res.json())
    .then(data => {
      if (!data.items || data.items.length === 0) {
        videoSection.innerHTML = `<h3>No videos found.</h3>`;
        return;
      }

      data.items.forEach(el => {
        const videoId = el.snippet.resourceId.videoId;
        const title = el.snippet.title;

        const thumbnails = el.snippet.thumbnails;
        const thumbUrl =
          thumbnails.maxres?.url ||
          thumbnails.standard?.url ||
          thumbnails.high?.url ||
          thumbnails.medium?.url ||
          thumbnails.default?.url;

        if (thumbUrl && videoId) {
          videoSection.innerHTML += `
            <a target="_blank" href="https://www.youtube.com/watch?v=${videoId}" style="display: block; margin-bottom: 16px;">
              <img src="${thumbUrl}" alt="${title}" style="width: 100%; max-width: 400px;" />
              <h3>${title}</h3>
            </a>`;
        }
      });
    })
    .catch(err => {
      console.error(err);
      videoSection.innerHTML = `<h3>Something went wrong, please try again later.</h3>`;
    });
}

setTimeout(getVideos, 1000);
