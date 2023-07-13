document.addEventListener("DOMContentLoaded", function() {
    var imgElements = document.getElementsByClassName("fullscreen-img");

    for (var i = 0; i < imgElements.length; i++) {
        imgElements[i].addEventListener("click", function() {
            if (this.requestFullscreen) {
                this.requestFullscreen();
            } else if (this.mozRequestFullScreen) { /* Firefox */
                this.mozRequestFullScreen();
            } else if (this.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                this.webkitRequestFullscreen();
            } else if (this.msRequestFullscreen) { /* IE/Edge */
                this.msRequestFullscreen();
            }
        });
    }
});
