<?php
function print_breadcrumbs(array $options = [])
{

    // Don't output for home front_page or paginated pages.
    if ((is_home() || is_front_page()) && !is_paged()) {
        return;
    }

    $defaults = [
        'container' => false,
        'delimiter' => '<span class="divider">/</span>',
        // Text for the 'Home' link.
        'home_url_text' => 'Home',
        // Tag before the current crumb.
        'before_tag' => '<li class="active">',
        // Tag after the current crumb.
        'after_tag' => '</li>',
        // Classes string for the UL tag.
        'ul_class' => null,
        'before' => null,
        'after' => null,
    ];

    $options = merge_default_options($defaults, $options);

    if ($options['container']) {
        echo "<div class='breadcrumb breadcrumb-wrap padding-none margin-none'>";
        echo "<div class='container'>";
    }

    if ($options['ul_class']) {
        $ul_class = $options['ul_class'];
    } else {
        $ul_class = 'breadcrumb margin-vert-none ' . ($options['container'] ? 'row' : 'breadcrumb-wrap');
    }

    echo '<ul class="' . $ul_class . '">';

    global $post;
    $home_url = home_url();
    echo '<li><a href="' . $home_url . '">' . $options['home_url_text'] . '</a></li> ' . $options['delimiter'] . ' ';

    if (is_category()) {
        global $wp_query;
        $cat_obj = $wp_query->get_queried_object();
        $this_cat = $cat_obj->term_id;
        $this_cat = get_category($this_cat);
        if (!is_wp_error($this_cat)) {
            $parent_cat = get_category($this_cat->parent);
            if (!is_wp_error($parent_cat) && $this_cat->parent) {
                echo(get_category_parents($parent_cat, true, ' ' . $options['delimiter'] . ' '));
            }
        }
        echo $options['before'] . 'Archive by category "' . single_cat_title('', false) . '"' . $options['after'];

    } elseif (is_day()) {
        echo '<li><a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a></li> ' . $options['delimiter'] . ' ';
        echo '<li><a href="' . get_month_link(get_the_time('Y'),
                get_the_time('m')) . '">' . get_the_time('F') . '</a></li> ' . $options['delimiter'] . ' ';
        echo $options['before'] . get_the_time('d') . $options['after'];

    } elseif (is_month()) {
        echo '<li><a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a></li> ' . $options['delimiter'] . ' ';
        echo $options['before'] . get_the_time('F') . $options['after'];

    } elseif (is_year()) {
        echo $options['before'] . get_the_time('Y') . $options['after'];

    } elseif (is_single() && !is_attachment()) {
        if (get_post_type() !== 'post') {
            $post_type = get_post_type_object(get_post_type());
            $slug = $post_type->rewrite;
            echo '<li><a href="' . $home_url . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a></li> ' . $options['delimiter'] . ' ';
            echo $options['before'] . get_the_title() . $options['after'];
        } else {
            $categories = get_the_category();
            if (!is_wp_error($categories) && $categories) {
                $cat = $categories[0];
                echo get_category_parents($cat, true, ' ' . $options['delimiter'] . ' ');
            }
            echo $options['before'] . get_the_title() . $options['after'];
        }

    } elseif (!is_single() && !is_page() && get_post_type() !== 'post' && !is_404()) {
        $post_type = get_post_type_object(get_post_type());
        if ($post_type) {
            echo $options['before'] . $post_type->labels->singular_name . $options['after'];
        }
    } elseif (is_attachment()) {
        $parent = get_post($post->post_parent);
        $categories = get_the_category($parent->ID);
        if (!is_wp_error($categories) && $categories) {
            $cat = $categories[0];
            echo get_category_parents($cat, true, ' ' . $options['delimiter'] . ' ');
        }
        echo '<li><a href="' . get_permalink($parent) . '">' . $parent->post_title . '</a></li> ' . $options['delimiter'] . ' ';
        echo $options['before'] . get_the_title() . $options['after'];

    } elseif (is_page() && !$post->post_parent) {
        echo $options['before'] . get_the_title() . $options['after'];

    } elseif (is_page() && $post->post_parent) {
        $parent_id = $post->post_parent;
        $breadcrumbs = [];
        while ($parent_id) {
            $page = get_post($parent_id);
            $breadcrumbs[] = '<li><a href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a></li>';
            $parent_id = $page->post_parent;
        }
        $breadcrumbs = array_reverse($breadcrumbs);
        foreach ($breadcrumbs as $crumb) {
            echo $crumb . ' ' . $options['delimiter'] . ' ';
        }
        echo $options['before'] . get_the_title() . $options['after'];

    } elseif (is_search()) {
        echo $options['before'] . 'Search results for "' . get_search_query() . '"' . $options['after'];

    } elseif (is_tag()) {
        echo $options['before'] . 'Posts tagged "' . single_tag_title('', false) . '"' . $options['after'];

    } elseif (is_author()) {
        global $author;
        $userdata = get_userdata($author);
        echo $options['before'] . 'Articles posted by ' . $userdata->display_name . $options['after'];

    } elseif (is_404()) {
        echo $options['before'] . 'Error 404' . $options['after'];
    }

    if (get_query_var('paged')) {
        if (is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author()) {
            echo ' (';
        }
        echo $options['delimiter'] . '<li>' . __('Page', 'bootstrap') . ' ' . get_query_var('paged') . '</li>';
        if (is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author()) {
            echo ')';
        }
    }

    echo '</ul>';

    if ($options['container']) {
        echo '</div>';
        echo '</div>';
    }
}

/**
 * Merges the default settings array with the arguments/ provided options.
 *
 * @param array $defaults The default settings array.
 * @param array $options The arguments/ provided options.
 *
 * @return array The combined settings array result.
 */
function merge_default_options(array $defaults, array $options)
{
    $output = [];
    foreach ($defaults as $name => $default) {
        if (array_key_exists($name, $options)) {
            $output[$name] = $options[$name];
        } else {
            $output[$name] = $default;
        }
    }

    return $output;
}

?>
<div class="pbhs-website-part part-page part-content-archive container-fluid part-width-full  palette_b-1-bg   part-type-content"
     id="part-content-1">
    <div class="row">
        <div class="content-wrap relative">
            <div class="container">
                <div class="row">
                    <?php
                    global

                    $post, $posts;
                    $wrapperClasses = ['flex-content', 'w-100', 'd-md-flex', 'flex-row-reverse'];
                    $contentClasses = ['page-content-wrap', 'page-' . esc_attr($post->ID)];
                    $sideNavClasses = ['side-wrap'];
                    ?>
                    <div class='<?= esc_attr(implode(' ', $wrapperClasses)) ?>'>
                        <div id='contentMain' class='<?= esc_attr(implode(' ', $contentClasses)) ?>' role='main'>
                            <div class="component-area-top d-flex w-100 flex-md-row flex-sm-row flex-column align-items-start justify-content-center">
                                <div class="component-slot flex-shrink-1 flex-grow-1 w-100 component-type-breadcrumb text-right  text-inherit-sm text-center-xs"
                                     data-compenent-slot-tab="top-component-area"
                                     data-compenent-slot-slug="componentsTop" data-compenent-slot-index="0">
                                    <div class="component-breadcrumb ">
                                        <?php print_breadcrumbs(); ?>
                                    </div>
                                </div>
                            </div>
                            <div id="content" class="editable clearfix">
                                <?php
                                the_content();

                                if ('sitemap' === $post->post_name) {
                                    pbhs_nav([
                                        'id' => '',
                                        'class' => 'sitemap',
                                    ]);
                                }
                                ?>
                            </div>
                        </div><!-- / #content-main -->
                        <aside id="contentSide" class="<?= esc_attr(implode(' ', $sideNavClasses)) ?>"
                               role="complementary">
                            <?php

                            // Output Sidebar navigation.
                            if (function_exists('pbhs_sidenav')) {
                                ?>
                                <div class="side-nav-wrapper">
                                    <?php
                                    pbhs_sidenav(); ?>
                                </div>
                                <?php
                            }

                            pbhs_sidebar_content();

                            ?>

                            <div class="component-area-sidebarcontentbottom d-flex w-100 flex-md-column flex-sm-column flex-column justify-content-center align-items-center gap-md- gap-sm- gap-">
                                <div class="component-slot component-type-modalFormButton text-center  text-inherit-sm text-center-xs" data-motion-id="685b0c958c118-0">
                                    <div class="component-modal-form-button "><div id="modal-form-button1" class="text-center-xs margin-horz-none-xs"><a id="componentButton6" class="text-upper text-center padding-horz padding-horz-half-xs headline-font btn-palette_a-1 btn btn-outline" href="/?gform=1&modal" onclick="modalLoadingIcon(this)" rel="nofollow">
                                                <span class="btn-title-wrap">Request an Appointment</span>
                                            </a></div></div><script></script>                            </div>
                                <div class="component-slot component-type-customImage text-center component-slot--no-margin text-center-sm text-center-xs" data-motion-id="685b0c958c118-1">
                                    <div class="component-custom-linked-image d-none d-md-block">
                                        <img alt="Dr. Jeffery Burns Side Logo" width="175" height="605" class="img-fit" src="<?= JeffreyBurns_uploads_url('/2019/10/side-logo.png') ?>"  loading="eager">                    </div>
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </div><!-- / .row -->
        </div><!-- / .container -->
    </div><!-- / .content-wrap -->
</div>