<?php
/**
 * Archive Content Template
 * Displays archive pages including category, tag, date, and author archives
 */
?>
<style>
/* Blog Hero */
.blog-hero {
  background: #74bdc2;
  padding: 60px 20px;
  text-align: center;
}
.blog-title {
  font-size: 42px;
  color: #3e3e3e;
  font-family: Amiri, serif;
  font-weight: 400;
  margin: 0;
}

/* Blog List */
.blog-list {
  padding: 60px 20px;
  background: #f9f9f9;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
.blog-card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;
  text-decoration: none;
  display: block;
}
.blog-card:hover {
  transform: translateY(-4px);
  text-decoration: none;
}
.blog-thumb {
  margin-bottom: 15px;
}
.blog-thumb img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.blog-heading {
  font-size: 20px;
  margin-top: 15px;
  color: #3e3e3e;
  font-family: Amiri, serif;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 10px;
}
.blog-excerpt {
  color: #979797;
  font-size: 15px;
  margin-top: 10px;
  line-height: 1.5;
}

/* Pagination */
.pagination {
  margin-top: 40px;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .blog-hero {
    padding: 40px 15px;
  }
  .blog-title {
    font-size: 32px;
  }
  .blog-list {
    padding: 40px 15px;
  }
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

<div class="pbhs-website-part part-page part-content-archive container-fluid part-width-full palette_b-1-bg part-type-content" id="part-content-1">
    <div class="row">
        <div class="content-wrap relative">
            <div class="container">
                <div class="row">
                    <?php
                    global $post, $posts;
                    $wrapperClasses = ['flex-content', 'w-100', 'd-md-flex', 'flex-row-reverse'];
                    $contentClasses = ['page-content-wrap', 'archive-content'];
                    $sideNavClasses = ['side-wrap'];
                    ?>
                    <div class='<?= esc_attr(implode(' ', $wrapperClasses)) ?>'>
                        <div id='contentMain' class='<?= esc_attr(implode(' ', $contentClasses)) ?>' role='main'>
                            <div class="component-area-top d-flex w-100 flex-md-row flex-sm-row flex-column align-items-start justify-content-center">
                                <div class="component-slot flex-shrink-1 flex-grow-1 w-100 component-type-breadcrumb text-right text-inherit-sm text-center-xs"
                                     data-compenent-slot-tab="top-component-area"
                                     data-compenent-slot-slug="componentsTop" data-compenent-slot-index="0">
                                    <div class="component-breadcrumb">
                                        <?php print_breadcrumbs(); ?>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="content" class="editable clearfix">
                                <section class="blog-hero">
                                    <div class="container">
                                        <h1 class="blog-title">
                                            <?php
                                            if (is_category()) {
                                                single_cat_title();
                                            } elseif (is_tag()) {
                                                single_tag_title();
                                            } elseif (is_author()) {
                                                printf(__('Author: %s', 'jeffreyburns'), '<span class="vcard">' . get_the_author() . '</span>');
                                            } elseif (is_date()) {
                                                if (is_year()) {
                                                    printf(__('Year: %s', 'jeffreyburns'), get_the_date(_x('Y', 'yearly archives date format')));
                                                } elseif (is_month()) {
                                                    printf(__('Month: %s', 'jeffreyburns'), get_the_date(_x('F Y', 'monthly archives date format')));
                                                } elseif (is_day()) {
                                                    printf(__('Day: %s', 'jeffreyburns'), get_the_date(_x('F j, Y', 'daily archives date format')));
                                                }
                                            } elseif (is_post_type_archive()) {
                                                post_type_archive_title();
                                            } else {
                                                _e('Our Blog', 'jeffreyburns');
                                            }
                                            ?>
                                        </h1>
                                        
                                        <?php
                                        // Show an optional term description
                                        $term_description = term_description();
                                        if (!empty($term_description)) :
                                            printf('<div class="archive-description">%s</div>', $term_description);
                                        endif;
                                        ?>
                                    </div>
                                </section>

                                <section class="blog-list">
                                    <div class="container">
                                        <?php if (have_posts()) : ?>
                                            <div class="blog-grid">
                                                <?php while (have_posts()) : the_post(); ?>
                                                    <article class="blog-card">
                                                        <a href="<?php the_permalink(); ?>">
                                                            <?php if (has_post_thumbnail()) : ?>
                                                                <div class="blog-thumb">
                                                                    <?php the_post_thumbnail('medium'); ?>
                                                                </div>
                                                            <?php endif; ?>
                                                            <h2 class="blog-heading"><?php the_title(); ?></h2>
                                                            <div class="blog-excerpt"><?php the_excerpt(); ?></div>
                                                        </a>
                                                    </article>
                                                <?php endwhile; ?>
                                            </div>
                                            <div class="pagination">
                                                <?php the_posts_pagination(array(
                                                    'mid_size' => 2,
                                                    'prev_text' => __('&laquo; Previous', 'jeffreyburns'),
                                                    'next_text' => __('Next &raquo;', 'jeffreyburns'),
                                                )); ?>
                                            </div>
                                        <?php else : ?>
                                            <div class="no-posts">
                                                <h2><?php _e('No posts found', 'jeffreyburns'); ?></h2>
                                                <p><?php _e('It looks like nothing was found at this location. Maybe try a search?', 'jeffreyburns'); ?></p>
                                                <?php get_search_form(); ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                </section>
                            </div>
                        </div><!-- / #content-main -->
                        
                        <aside id="contentSide" class="<?= esc_attr(implode(' ', $sideNavClasses)) ?>" role="complementary">
                            <?php
                            // Output Sidebar navigation
                            if (function_exists('pbhs_sidenav')) : ?>
                                <div class="side-nav-wrapper">
                                    <?php pbhs_sidenav(); ?>
                                </div>
                            <?php endif; ?>

                            <?php pbhs_sidebar_content(); ?>

                            <div class="component-area-sidebarcontentbottom d-flex w-100 flex-md-column flex-sm-column flex-column justify-content-center align-items-center gap-md- gap-sm- gap-">
                                <div class="component-slot component-type-modalFormButton text-center text-inherit-sm text-center-xs" data-motion-id="685b0c958c118-0">
                                    <div class="component-modal-form-button">
                                        <div id="modal-form-button1" class="text-center-xs margin-horz-none-xs">
                                            <a id="componentButton6" class="text-upper text-center padding-horz padding-horz-half-xs headline-font btn-palette_a-1 btn btn-outline" href="https://staging.pbhshosting.com/www-jeffreyburns-com?gform=1&amp;modal" onclick="modalLoadingIcon(this)" rel="nofollow">
                                                <span class="btn-title-wrap">Request an Appointment</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="component-slot component-type-customImage text-center component-slot--no-margin text-center-sm text-center-xs" data-motion-id="685b0c958c118-1">
                                    <div class="component-custom-linked-image d-none d-md-block">
                                        <img alt="Dr. Jeffery Burns Side Logo" width="175" height="605" class="img-fit" src="<?= JeffreyBurns_uploads_url('/2019/10/side-logo.png') ?>" loading="eager">
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div><!-- / .row -->
        </div><!-- / .container -->
    </div><!-- / .content-wrap -->
</div>