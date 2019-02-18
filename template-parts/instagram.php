<div class="instagram__container grid-container grid">
  <div class="grid-x grid-padding-x">
    <div class="cell">
      <h2 class="section__title text-center">Instagram</h2>
    </div>
  </div>

  <div class="show-for-large">
    <?php echo do_shortcode('[instagram-feed layout=grid num=8 cols=8 showheader=false showbutton=false showfollow=false]'); ?>
  </div>

  <div class="show-for-medium-only">
    <?php echo do_shortcode('[instagram-feed layout=grid num=6 cols=6 showheader=false showbutton=false showfollow=false]'); ?>
  </div>

  <div class="show-for-small-only">
    <?php echo do_shortcode('[instagram-feed layout=grid num=6 cols=2 showheader=false showbutton=false showfollow=false]'); ?>
  </div>

  <div class="grid-x grid-padding-x text-center">
    <div class="cell">
      <a class="button button--brand" href="https://www.instagram.com/deneemotion" target="_blank">View more</a>
    </div>
  </div>
</div>