<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact</title>
    <link rel="stylesheet" href="../assets/css/page.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="../assets/js/page.js"></script>
  </head>
  <body>
    <div class="aboutLayer mobile"></div>
    <div class="layer desktop"></div>
    <?php snippet('header') ?>

    <div class="container desktop">
      <!-- <div class="container"> -->
        <div class="imgs">
        <?php foreach ($page->images() as $image): ?>
          <div class="singleImage horizontal">
            <img src=<?= $image->url() ?> alt="" />
          </div>
        <?php endforeach ?>
        </div>
        <div class="description">
          <div class="text">
            <p class="NY">
              <?= $page->nylocation() ?>
            </p>
            <br/>
            <p class="TJ disabled">
              <?= $page->tijuanalocation() ?>
            </p>
            <?php if($page->generalemail()->isNotEmpty()): ?>
              <br/>
              <p class="general">
                General
                <br />
                <?= $page->generalemail() ?>
              </p>
            <?php endif ?>
            <?php if($page->pressemail()->isNotEmpty()): ?>
              <br/>
              <p class="press">
                Press enquires
                <br />
                <?= $page->pressemail() ?>
              </p>
            <?php endif ?>
            <?php if($page->internemail()->isNotEmpty()): ?>
              <br/>
              <p class="intern">
                Interships
                <br />
                <?= $page->internemail() ?>
              </p>
            <?php endif ?>
          </div>
        </div>
      <!-- </div> -->
    </div>

    <div class="container mobile">
      <!-- <div class="container"> -->
        <div class="imgs">
          <div class="singleImage horizontal">
            <img src=<?= $page->images()->first()->url() ?> alt="" />
          </div>
        </div>
        <div class="description">
          <div class="text">
            <p class="NY">
              <?= $page->nylocation() ?>
            </p>
          </div>
        </div>
        <div class="imgs2">
          <div class="singleImage horizontal">
            <img src=<?= $page->images()->last()->url() ?> alt="" />
          </div>
        </div>
        <div class="description">
          <div class="text">
            <p class="TJ">
              <?= $page->tijuanalocation() ?>
            </p>
            <?php if($page->generalemail()->isNotEmpty()): ?>
              <br/>
              <p class="general">
                General
                <br />
                <?= $page->generalemail() ?>
              </p>
            <?php endif ?>
            <?php if($page->pressemail()->isNotEmpty()): ?>
              <br/>
              <p class="press">
                Press enquires
                <br />
                <?= $page->pressemail() ?>
              </p>
            <?php endif ?>
            <?php if($page->internemail()->isNotEmpty()): ?>
              <br/>
              <p class="intern">
                Interships
                <br />
                <?= $page->internemail() ?>
              </p>
            <?php endif ?>
          </div>
        </div>
      <!-- </div> -->
    </div>
  </body>
</html>

<script>
  $(document).ready(function () {
    $(".titleLinks").children().last().addClass("onContact");
  })
</script>