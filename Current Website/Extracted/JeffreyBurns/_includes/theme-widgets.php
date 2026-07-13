<?php
/**
 * PBHS Theme Widgets
 *
 * @package PbhsTheme
 * @Sample :
 * register_sidebar([
 * 'name' => 'Your Widget Area Name',
 * 'id' => 'your-widget-area-id,
 * 'before_widget' => '<div id="%1$s" class="widget %2$s">',   // Do not modify
 * 'after_widget' => '</div>'                                  // Do not modify
 * ]);
 **/

if (!function_exists('theme_widgets')) {
    /**
     * Registers the theme widgets
     */
    function theme_widgets()
    {
        register_sidebar(
            [
                'name' => 'Blog Sidebar',
                'id' => 'blog-widget',
                'before_widget' => '<div id="%1$s" class="widget %2$s">',
                'after_widget' => '</div>',
            ]
        );
    }
} // End if().
pbhs_add_action('widgets_init', 'theme_widgets');
pbhs_add_filter('widget_text', 'do_shortcode'); // Process shortcodes for the widget text.
