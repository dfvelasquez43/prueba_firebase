    window.onload = function playlist(){
            var reproductor = document.getElementById("reproductor"),
            videos = ["video1", "video2", "video3"],
        info = document.getElementById("info");
     
        info.innerHTML = "Vídeo: " + videos[0];
        reproductor.src = videos[0] + ".mp4";
        reproductor.play();
     
        reproductor.addEventListener("ended", function() {
            var nombreActual = info.innerHTML.split(": ")[1];
            var actual = videos.indexOf(nombreActual);
            this.src = (actual == videos.length - 1 ? videos[0] : videos[actual + 1]) + ".mp4";
            info.innerHTML = "Vídeo: " + videos[actual + 1];
            this.play();
        }, false);
    }