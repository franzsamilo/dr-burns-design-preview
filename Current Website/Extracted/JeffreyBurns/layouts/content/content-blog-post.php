<?php
/**
 * Single Blog Post Content Template
 * Displays individual blog posts
 */
?>
<div class="pbhs-website-part part-page part-content-post container-fluid part-width-full palette_b-1-bg part-type-content" id="part-content-1">
    <div class="row">
        <div class="content-wrap relative">
            <div class="container">
                <div class="row">
                    <?php
                    global $post, $posts;
                    $wrapperClasses = ['flex-content', 'w-100', 'd-md-flex', 'flex-row-reverse'];
                    $contentClasses = ['page-content-wrap', 'single-post-content'];
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
                                <?php while (have_posts()) : the_post(); ?>
                                    <article id="post-<?php the_ID(); ?>" <?php post_class('single-post'); ?>>
                                        <header class="entry-header">
                                            <h1 class="entry-title"><?php the_title(); ?></h1>
                                            
                                            <div class="entry-meta">
                                                <span class="posted-on">
                                                    <time class="entry-date published" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                                                        <?php echo esc_html(get_the_date()); ?>
                                                    </time>
                                                </span>
                                                
                                                <span class="byline">
                                                    <?php printf(__('by %s', 'jeffreyburns'), '<span class="author vcard"><a class="url fn n" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a></span>'); ?>
                                                </span>
                                                
                                                <?php
                                                $categories = get_the_category();
                                                if (!empty($categories)) : ?>
                                                    <span class="cat-links">
                                                        <?php
                                                        $category_links = array();
                                                        foreach ($categories as $category) {
                                                            $category_links[] = '<a href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a>';
                                                        }
                                                        echo implode(', ', $category_links);
                                                        ?>
                                                    </span>
                                                <?php endif; ?>
                                                
                                                <?php
                                                $tags = get_the_tags();
                                                if (!empty($tags)) : ?>
                                                    <span class="tags-links">
                                                        <?php
                                                        $tag_links = array();
                                                        foreach ($tags as $tag) {
                                                            $tag_links[] = '<a href="' . esc_url(get_tag_link($tag->term_id)) . '">' . esc_html($tag->name) . '</a>';
                                                        }
                                                        echo implode(', ', $tag_links);
                                                        ?>
                                                    </span>
                                                <?php endif; ?>
                                            </div>
                                        </header>

                                        <?php if (has_post_thumbnail()) : ?>
                                            <div class="post-thumbnail">
                                                <?php the_post_thumbnail('large'); ?>
                                            </div>
                                        <?php endif; ?>

                                        <div class="entry-content">
                                            <?php
                                            the_content();

                                            wp_link_pages(array(
                                                'before' => '<div class="page-links">' . esc_html__('Pages:', 'jeffreyburns'),
                                                'after' => '</div>',
                                            ));
                                            ?>
                                        </div>

                                        <footer class="entry-footer">
                                            <?php
                                            // Edit link
                                            edit_post_link(
                                                sprintf(
                                                    /* translators: %s: Name of current post */
                                                    esc_html__('Edit %s', 'jeffreyburns'),
                                                    the_title('<span class="screen-reader-text">"', '"</span>', false)
                                                ),
                                                '<span class="edit-link">',
                                                '</span>'
                                            );
                                            ?>
                                        </footer>
                                    </article>

                                    <?php
                                    // Post navigation
                                    the_post_navigation(array(
                                        'prev_text' => '<span class="nav-subtitle">' . esc_html__('Previous:', 'jeffreyburns') . '</span> <span class="nav-title">%title</span>',
                                        'next_text' => '<span class="nav-subtitle">' . esc_html__('Next:', 'jeffreyburns') . '</span> <span class="nav-title">%title</span>',
                                    ));

                                    // If comments are open or we have at least one comment, load up the comment template.
                                    if (comments_open() || get_comments_number()) :
                                        comments_template();
                                    endif;
                                    ?>

                                <?php endwhile; ?>
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