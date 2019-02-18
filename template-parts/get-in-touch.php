<div class="grid-container grid getintouch__container">
  <div class="grid-x grid-padding-x grid-margin-x grid-padding-y">
    <div class="cell text-center">
      <h2 class="section__title">Get in touch</h2>
    </div>
    <div class="cell large-4 large-offset-2 medium-6 text-right">
      <i class="fa fa-envelope-o color--brand" aria-hidden="true"></i> <a class="color--dark-gray" href="mailto:<?php the_field('email', 'option'); ?>"><?php the_field('email', 'option'); ?></a>
    </div>
    <div class="cell large-4 medium-6 color--dark-gray text-left">
      <i class="fa fa-phone color--brand" aria-hidden="true"></i> <?php the_field('phone_number', 'option'); ?>
    </div>
  </div>
</div>