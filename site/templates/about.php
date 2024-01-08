<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About</title>
    <link rel="stylesheet" href="../assets/css/page.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="../assets/js/page.js"></script>
  </head>
  <body>
    <div class="aboutLayer"></div>

    <?php snippet('header') ?>

    <div class="container">
      <div class="aboutText">
      <p class="firstP">
          Studio Huerta is a design firm led by Gabriel Huerta.
        </p>
        <p>
        <?= $page->description() ?>
        </p>
        <div class="twoColums">
        <?php foreach ($page->images() as $image): ?>
          <div class="singleImage vertical">
            <img src=<?= $image->url() ?> alt="" />
          </div>
        <?php endforeach ?>
        </div>
        <br />
        <p>Past and Present Collaborators</p>
        <p>
        <?= $page->collaborators() ?>
        </p>
        <br />
        <p>Recognition</p>
        <p>
        <?= $page->recognition() ?>
        </p>
        <br />
        <p>Selected Press</p>
        <p>
        <?= $page->press() ?>
        </p>
        <br />
        <p class="credits">
          Credits: website designed and developed by Rok Hudobivnik & <a href="https://www.mengjieliu.com" target="_blank">Mengjie
          Liu</a>
        </p>
      </div>
    </div>
  </body>
</html>

<script>
  $(document).ready(function () {
    $(".titleLinks").children().first().addClass("onAbout");
  })
</script>
