<?php
get_template_part('layouts/page/part-topbar-tablet-1');
get_template_part('layouts/page/part-component-area-single-1');
get_template_part('layouts/page/part-navigation-1');
get_template_part('layouts/page/part-banner-1');
get_template_part('layouts/page/part-component-area-single-2');
if (is_404()) {
    if (locate_template('layouts/content/content-404.php')) {
        get_template_part('layouts/content/content-404');
    } else {
        get_template_part('layouts/content/content');
    }
} elseif (is_search()) {
    if (locate_template('layouts/content/content-search.php')) {
        get_template_part('layouts/content/content-search');
    } else {
        get_template_part('layouts/content/content');
    }
} elseif (is_home()) {
    if (locate_template('layouts/content/content-blog.php')) {
        get_template_part('layouts/content/content-blog');
    } else {
        get_template_part('layouts/content/content');
    }
} elseif (is_archive()) {
    if (locate_template('layouts/content/content-archive.php')) {
        get_template_part('layouts/content/content-archive');
    } else {
        get_template_part('layouts/content/content');
    }
} else {
    get_template_part('layouts/content/content');
}
get_template_part('layouts/page/part-footer-1');