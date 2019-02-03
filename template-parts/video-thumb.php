<div class="cell medium-6 large-4 thumb">
    <a class="thumb__link" href="<?php echo get_permalink(); ?>">
      <div class="thumb__image">
        <?php the_post_thumbnail(); ?>
      </div>
      <div class="thumb__text">
        <h3 class="thumb__title"><?php the_title(); ?></h3>
        <div class="thumb__location">
          <?php the_field('location' ); ?>
        </div>
      </div>
    </a>
</div>