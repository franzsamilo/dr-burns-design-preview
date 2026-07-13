<?php
$offices_count = count(get_template_setting('offices', []));
if ($offices_count > 1) {
    get_template_part('_parts/modal', 'phone');
}