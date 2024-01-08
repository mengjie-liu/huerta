<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= $page->name() ?></title>
    <link rel="stylesheet" href="../assets/css/project.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="../assets/js/project.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@barba/core"></script>
  </head>
  <body data-barba="wrapper">
    <div class="layer"></div>
    <main data-barba="container" data-barba-namespace="project">
      <?php snippet('header') ?>

    
    <div class="subheader desktop">
      <a href="../" class="back">
        <div>back</div>
      </a>
      <div class="projectTitle">
        <?= $page->name() ?>
        <br />
        <?= $page->location() ?>, <?= $page->year() ?>
      </div>
      <div class="prevnext">
      <?php if($prev = $page->prev()): ?>
        <a href="<?= $prev->url() ?>">
          <div><-</div>
        </a>
        <?php else: ?>
          <a href="" class="hidden">
          <div><-</div>
        </a>
        <?php endif ?>
        <?php if($next = $page->next()): ?>
        <a href="<?= $next->url() ?>">
          <div>-></div>
        </a>
        <?php endif ?>
      </div>
    </div>

    <div class="subheader mobile">
      <div class="secsubheader">
        <div class="back">
          <a href="../">
            back
          </a>
        </div>
        <div class="prevnext">
          <?php if($prev = $page->prev()): ?>
            <a href="<?= $prev->url() ?>">
              <div><-</div>
            </a>
            <?php else: ?>
              <a href="" class="hidden">
              <div><-</div>
            </a>
          <?php endif ?>
          <?php if($next = $page->next()): ?>
            <a href="<?= $next->url() ?>">
              <div>-></div>
            </a>
          <?php endif ?>
        </div>
      </div>
      
      <div class="projectTitle">
        <?= $page->name() ?>
        <br />
        <?= $page->location() ?>, <?= $page->year() ?>
      </div>
    </div>

    <div class="container">
      <div class="infor nodisplay">
      <?php foreach ($page->images() as $image): ?>
        <div>
          <p class="url"><?= $image->url() ?></p>
          <p class="orientation"><?= $image->orient() ?></p>
        </div>
      <?php endforeach ?>
      </div>
      <div class="description">
        <div class="text">
          <?= $page->description() ?>
          <div class="info">
            Status
            <br />
            <?= $page->projectstatus() ?>
            <br /><br />
            Project Team
            <br />
            <?= $page->team() ?>
            <?php if($page->photography()->isNotEmpty()): ?>
              <br /><br />
              Project Consultants
              <br />
              <?= $page->consultants() ?>
            <?php endif ?>
            <?php if($page->photography()->isNotEmpty()): ?>
              <br /><br />
              Photography
              <br />
              <?= $page->photography() ?>
            <?php endif ?>
          </div>
        </div>
      </div>
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