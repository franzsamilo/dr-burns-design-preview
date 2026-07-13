<?php
require __DIR__.'/theme-widgets.php';
require __DIR__.'/filters.php';


define('PBHS_THEME_VERSION', 4.0);
define('GLOBAL_SOCIAL_MEDIA', 1);
define('VIDEO_SLIDER_READY', 1);
register_nav_menu('main', 'Main Navigation');
register_nav_menu('footer', 'Footer Navigation');

if (!function_exists('theme_image_sizes')) {
    function theme_image_sizes($image_sizes)
    {
        // $image_sizes['image_size_name'] = [width, height, crop]; // Example Image Size.
        $image_sizes['banner'] = [1900, 929, true];
        $image_sizes['banner_interior'] = [1170, 500, true]; // Alternate image size for interior banner photos.
        $image_sizes['featured_image'] = [541, 216, true];
        $image_sizes['offices'] = [
            500,
            240,
            true
        ];  // Image size for photos assigned to locations in Settings.
        // $image_sizes['members'] = [500, 240, true];  // Image size for photos assigned to members in Settings.
        return $image_sizes;
    }
}
pbhs_add_filter('pbhs_image_sizes', 'theme_image_sizes');

if (!function_exists('theme_meta_boxes')) {
    function theme_meta_boxes()
    {
        $args = [
            'fields' => [
                'featured_title' => [
                    'type' => 'text',
                    'tab' => 'Title',
                    'label' => 'Featured Title Text',
                    'placeholder' => '',
                ],
            ],
        ];
        add_pbhs_metabox('pbhs_page_attrs', $args, true);
    }
}
pbhs_add_action('pbhs_metabox_init', 'theme_meta_boxes', 100);
