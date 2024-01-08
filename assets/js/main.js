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

  //get info
  let orientationeles = $(".orientation");
  let orientations = [];
  orientationeles.each(function () {
    orientations.push($(this).text());
  });

  let coloreles = $(".color");
  let colors = [];
  coloreles.each(function () {
    colors.push($(this).text());
  });

  let urleles = $(".url");
  let images = [];
  urleles.each(function () {
    images.push($(this).text());
  });

  let nameeles = $(".name");
  let names = [];
  nameeles.each(function () {
    names.push($(this).text());
  });

  let pageeles = $(".pageUrl");
  let pageUrls = [];
  pageeles.each(function () {
    pageUrls.push($(this).text().split(" ").join("-"));
  });

  //create objects
  let imgObjects = [];
  for (i = 0; i < images.length; i++) {
    let imgObject = {
      pageUrl: pageUrls[i],
      url: images[i],
      orientation: orientations[i],
      color: colors[i],
      title: names[i],
    };
    imgObjects.push(imgObject);
  }

  console.log(imgObjects);

  function resizeForm() {
    var width =
      window.innerWidth > 0
        ? window.innerWidth
        : document.documentElement.clientWidth;
    if (width > 768) {
      //add in blank images
      const blankImages = ["", "", "", "", "", "", ""];
      const uniqueImages = [...new Set(imgObjects)]; // Get unique non-blank images
      const combinedImages = [...uniqueImages, ...blankImages];

      //shuffle array
      function shuffleArray(array) {
        let shuffled = array.slice(); // Create a copy of the array for shuffling
        let valid = false;

        while (!valid) {
          // Shuffle the array
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }

          // Check the validity of the shuffled array
          valid = true;
          for (let k = 0; k < shuffled.length - 2; k++) {
            if (
              shuffled[k] === "" &&
              shuffled[k + 1] === "" &&
              shuffled[k + 2] === ""
            ) {
              // If three blank images are together
              valid = false;
              break;
            }
            if (shuffled[k] === "" && shuffled[k + 1] === "") {
              // If two blank images are together
              valid = false;
              break;
            }
          }
        }
        return shuffled;
      }

      const shuffledImgObjects = shuffleArray(combinedImages);

      const mainContainer = document.createElement("div");
      mainContainer.classList.add("container");
      document.body.appendChild(mainContainer);

      let currentIndex = 0;
      let threeImgDivsCount = 0;

      while (currentIndex < shuffledImgObjects.length) {
        const div = document.createElement("div");
        div.classList.add("row");
        let numberOfImages = Math.min(
          shuffledImgObjects.length - currentIndex,
          Math.floor(Math.random() * 2) + 2
        ); // Randomly choose between 2 or 3 images
        let blankCount = 0;

        for (let i = 0; i < numberOfImages; i++) {
          if (currentIndex < shuffledImgObjects.length) {
            const atag = document.createElement("a");

            const title = document.createElement("p");
            title.classList.add("projectName");

            const img = new Image();

            if (shuffledImgObjects[currentIndex] === "") {
              // img.classList.add("blank-image");
              blankCount++;
            } else {
              title.innerHTML = shuffledImgObjects[currentIndex].title;

              img.src = shuffledImgObjects[currentIndex].url;

              $(atag).attr("href", shuffledImgObjects[currentIndex].pageUrl);

              if (
                shuffledImgObjects[currentIndex].orientation == "horizontal"
              ) {
                const size = [
                  "largeHorizontal",
                  "midHorizontal",
                  "smallHorizontal",
                ][Math.floor(Math.random() * 3)];
                img.classList.add(size);
                console.log("h!");
              } else if (
                shuffledImgObjects[currentIndex].orientation == "vertical"
              ) {
                const size = ["largeVertical", "midVertical", "smallVertical"][
                  Math.floor(Math.random() * 3)
                ];
                img.classList.add(size);
              }

              if (shuffledImgObjects[currentIndex].color === "color") {
                img.classList.add("colorImage");
              }
            }

            atag.appendChild(img);
            atag.classList.add("img");
            atag.appendChild(title);

            div.appendChild(atag);

            currentIndex++;
          }
        }

        if (numberOfImages === 3) {
          threeImgDivsCount++;
          if (threeImgDivsCount >= 4) {
            currentIndex -= 3;
            continue;
          }
          div.classList.add("threeCols");
        } else if (numberOfImages === 2) {
          div.classList.add("twoCols");
          const random = Math.random() < 0.5;
          const imgElements = div.getElementsByTagName("a");
          imgElements[random ? 0 : 1].className = "img large";
          imgElements[random ? 1 : 0].className = "img small";
        }

        mainContainer.appendChild(div);
      }

      // //randomize img url

      // //randomize rows
      var container = $(".container");
      var rows = container.children(".row");

      // rows
      //   .sort(function () {
      //     return Math.random() - 0.5;
      //   })
      //   .detach()
      //   .appendTo(container);

      // clone and infinite scroll
      $(".row:first-of-type").clone().appendTo(".container");
      $(".row:nth-of-type(2)").clone().appendTo(".container");
      $(".row:nth-of-type(3)").clone().appendTo(".container");
      let lastHeight;
      let secLastHeight;
      let thirdLastHeight;

      $("img").on("load", function () {
        lastHeight = $(".row:last-of-type")[0].offsetHeight;
        secLastHeight = $(".row:nth-last-of-type(2)")[0].offsetHeight;
        thirdLastHeight = $(".row:nth-last-of-type(3)")[0].offsetHeight;
      });

      $(".container").scroll(function () {
        // console.log(
        //   $(".container")[0].scrollTop,
        //   $(".container")[0].scrollHeight -
        //     lastHeight -
        //     secLastHeight -
        //     thirdLastHeight -
        //     64 * 3 -
        //     8 * rows.length,
        //   lastHeight,
        //   secLastHeight
        // );
        if (
          $(".container")[0].scrollTop >=
          $(".container")[0].scrollHeight -
            lastHeight -
            secLastHeight -
            thirdLastHeight -
            64 * 3 -
            8 * rows.length -
            16
        ) {
          console.log("bottom");
          $(".container")[0].scrollTop = 0;
          $(".container")[0].scrollTo({ top: 0, behavior: "instant" });
        }
      });
    } else {
      console.log("mobile");
      function shuffleArray(array) {
        let shuffled = array.slice(); // Create a copy of the array for shuffling
        // Shuffle the array
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      }

      const shuffledImgObjects = shuffleArray(imgObjects);

      const mainContainer = document.createElement("div");
      mainContainer.classList.add("container");
      document.body.appendChild(mainContainer);

      let currentIndex = 0;

      while (currentIndex < shuffledImgObjects.length) {
        const div = document.createElement("div");
        div.classList.add("column");
        // let numberOfImages = Math.min(
        //   shuffledImgObjects.length - currentIndex,
        //   Math.floor(Math.random() * 2) + 2
        // ); // Randomly choose between 2 or 3 images
        // let blankCount = 0;

        for (let i = 0; i < shuffledImgObjects.length; i++) {
          if (currentIndex < shuffledImgObjects.length) {
            const atag = document.createElement("a");

            const title = document.createElement("p");
            title.classList.add("projectName");

            const img = new Image();

            title.innerHTML = shuffledImgObjects[currentIndex].title;

            img.src = shuffledImgObjects[currentIndex].url;

            $(atag).attr("href", shuffledImgObjects[currentIndex].pageUrl);

            if (shuffledImgObjects[currentIndex].orientation == "horizontal") {
              const size = [
                "largeHorizontal",
                "midHorizontal",
                "smallHorizontal",
              ][Math.floor(Math.random() * 3)];
              img.classList.add(size);
              console.log("h!");
            } else if (
              shuffledImgObjects[currentIndex].orientation == "vertical"
            ) {
              const size = ["largeVertical", "midVertical", "smallVertical"][
                Math.floor(Math.random() * 3)
              ];
              img.classList.add(size);
            }

            if (shuffledImgObjects[currentIndex].color === "color") {
              img.classList.add("colorImage");
            }
            atag.appendChild(img);
            atag.classList.add("img");
            atag.appendChild(title);

            div.appendChild(atag);

            currentIndex++;
          }
        }
        mainContainer.appendChild(div);
      }
      var container = $(".container");
      var atag = $(".column").children("a");
      // var rows = container.children(".row");

      // rows
      //   .sort(function () {
      //     return Math.random() - 0.5;
      //   })
      //   .detach()
      //   .appendTo(container);

      // clone and infinite scroll
      atag.first().clone().appendTo(".column");
      atag.eq(1).clone().appendTo(".column");
      atag.eq(2).clone().appendTo(".column");
      // $(".column:nth-child(2)").clone().appendTo(".column");
      // $(".column:nth-child(3)").clone().appendTo(".column");
      let lastHeight;
      let secLastHeight;
      let thirdLastHeight;

      $("img").on("load", function () {
        lastHeight = atag.eq(2).height();
        secLastHeight = atag.eq(1).height();
        thirdLastHeight = atag.first().height();
      });

      $(".container").scroll(function () {
        console
          .log
          // $(".container")[0].scrollTop,
          // $(".container")[0].scrollHeight -
          //   lastHeight -
          //   secLastHeight -
          //   thirdLastHeight -
          //   64 * 3 -
          //   8 * rows.length,
          // lastHeight,
          // secLastHeight,
          // thirdLastHeight
          ();
        if (
          $(".container")[0].scrollTop >=
          $(".container")[0].scrollHeight -
            lastHeight -
            secLastHeight -
            thirdLastHeight -
            64 * 3 -
            36
        ) {
          console.log("bottom");
          $(".container")[0].scrollTop = 0;
          $(".container")[0].scrollTo({ top: 0, behavior: "instant" });
        }
      });
    }
  }
  window.onresize = resizeForm;
  resizeForm();
});
