<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Studiohuerta</title>
    <link rel="stylesheet" href="../assets/css/main.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="../assets/js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@barba/core"></script>
  </head>
  <body data-barba="wrapper">
    <div class="indexLayer"></div>
    <main>
    <?php snippet('header') ?>
    <div class="hidden info">
      <?php foreach ($page->images() as $image): ?>
        <div>
          <p class="pageUrl">projects/<?= $image->project() ?></p>
          <p class="url"><?= $image->url() ?></p>
          <p class="orientation"><?= $image->orient() ?></p>
          <p class="color"><?= $image->color() ?></p>
          <p class="name"><?= $image->project() ?></p>
        </div>
      <?php endforeach ?>
    </div>
    </main>
  </body>
</html>

<!-- <script>
  barba.init({
    transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
  })
</script> -->
