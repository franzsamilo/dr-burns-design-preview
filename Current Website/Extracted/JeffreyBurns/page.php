<?php
get_header();
if (is_front_page()) {
    get_template_part('layouts/frontpage');
}
else {
    get_template_part('layouts/page');
}
get_footer();