
    function filterVideos() {
        const input = document.getElementById("searchBox").value.toLowerCase();
        const categories = document.querySelectorAll(".category");

        categories.forEach(category => {
            let hasVisibleVideo = false;
            const videos = category.querySelectorAll(".video");

            videos.forEach(video => {
                const title = video.getAttribute("data-title").toLowerCase();
                if (title.includes(input)) {
                    video.classList.remove("hidden");
                    hasVisibleVideo = true;
                } else {
                    video.classList.add("hidden");
                }
            });

            category.style.display = hasVisibleVideo ? "block" : "none";
        });
    }

