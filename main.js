function zoomIn(img) {
    img.parentElement.classList.add("zoomed");
  }
  
  function zoomOut() {
    var zoomedImages = document.querySelectorAll(".image-container.zoomed");
    for (var i = 0; i < zoomedImages.length; i++) {
      zoomedImages[i].classList.remove("zoomed");
    }
  }