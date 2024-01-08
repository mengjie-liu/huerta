$(document).ready(function () {
  $(".links")
    .mouseenter(function () {
      $(this).css({
        "text-decoration": "underline",
        "text-underline-offset": "0.5rem",
      });
    })
    .mouseleave(function () {
      $(this).css({
        "text-decoration": "none",
      });
    });

  let orientationeles = $(".orientation");
  let orientations = [];
  orientationeles.each(function () {
    orientations.push($(this).text());
  });

  let urleles = $(".url");
  let images = [];
  urleles.each(function () {
    images.push($(this).text());
  });

  let imgObjects = [];
  for (let i = 0; i < images.length; i++) {
    let imgObject = {
      url: images[i],
      orient: orientations[i],
    };
    imgObjects.push(imgObject);
  }

  // console.log(imgObjects);

  function createImageDivs(imagesArray) {
    const container = document.querySelector(".container");
    let verticalImages = [];
    let horizontalImages = [];
    const imagesDiv = document.createElement("div");

    for (let i = 0; i < imagesArray.length; i++) {
      if (imagesArray[i].orient == "vertical") {
        verticalImages.push(imagesArray[i]);
      } else {
        horizontalImages.push(imagesArray[i]);
      }
    }
    // console.log(verticalImages, horizontalImages);

    for (let i = 0; i < verticalImages.length; i += 2) {
      const pairDiv = document.createElement("div");
      pairDiv.classList.add("twoColums");
      const imageDiv1 = document.createElement("div");
      const img1 = document.createElement("img");
      img1.src = verticalImages[i].url;
      imageDiv1.classList.add("vertical");
      imageDiv1.appendChild(img1);
      pairDiv.append(imageDiv1);

      if (verticalImages[i + 1]) {
        const imageDiv2 = document.createElement("div");
        const img2 = document.createElement("img");
        img2.src = verticalImages[i + 1].url;
        imageDiv2.classList.add("vertical");
        imageDiv2.appendChild(img2);
        pairDiv.append(imageDiv2);
      } else {
        const imageDiv2 = document.createElement("div");
        const img2 = document.createElement("img");
        img2.src = "";
        img2.alt = "";
        img2.classList.add("blankImage");
        imageDiv2.classList.add("vertical");
        imageDiv2.appendChild(img2);
        pairDiv.append(imageDiv2);
      }
      imagesDiv.append(pairDiv);
    }

    for (let i = 0; i < horizontalImages.length; i++) {
      const imageDiv = document.createElement("div");
      const img = document.createElement("img");
      imagesDiv.classList.add("imgs");
      imageDiv.classList.add("singleImage");
      img.src = horizontalImages[i].url;
      imageDiv.classList.add("horizontal");
      imageDiv.append(img);
      imagesDiv.append(imageDiv);
      console.log(img);
    }

    container.prepend(imagesDiv);
  }

  // Call the function to create image divs
  createImageDivs(imgObjects);

  var container = $(".imgs");
  var rows = container.children("div");

  rows
    .sort(function () {
      return Math.random() - 0.5;
    })
    .detach()
    .appendTo(container);
});
