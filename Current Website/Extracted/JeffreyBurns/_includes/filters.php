<?php

// For appending dynamic custom styles, can be used in combination with color picker settings.
// Uncomment the "add_filter" line below the function to enble the filter.
if (!function_exists('theme_template_dynamic_css')) {

    function theme_template_dynamic_css($css, $post_id)
    {
        $banner_info = theme_banner_info();
        // Ratio Adjustment for mobile width.
        $banner_mobile_height = round($banner_info[2] * 0.7, 2);

        $css .= "#banner .slider { height: {$banner_info[2]}px !important; }\n";
        $css .= "@media (max-width: 767px) { #banner .slider { height: {$banner_mobile_height}px !important; } }";

        return $css;
    }
}

if (!function_exists('theme_gform_submit_button')) {

    function theme_gform_submit_button($button, $form)
    {
        return "<button class='btn btn-default gform_button' id='gform_submit_button_{$form["id"]}'><span>Submit</span></button>";
    }
}
pbhs_add_filter('gform_submit_button', 'theme_gform_submit_button', 10, 2);
if (!function_exists('theme_gform_add_form_control_class')) {
    /**
     * Adds new class name to gform controls.
     *
     * @param string $class_string The current class string.
     *
     * @return string The class string concatenated with the new class name.
     */
    function theme_gform_add_form_control_class($class_string)
    {
        return $class_string.' your-class-name-here';
    }
}


if (!function_exists('theme_button_style_options')) {
    function theme_button_style_options($options)
    {
        $options = [
            'button-theme' => 'Theme Button Style',
            //'button-3d'      => '3d Flip Button',
            'button-basic' => 'Standard Button',
            'button-outline' => 'Outline Button',
        ];

        return $options;
    }
}
pbhs_add_filter('custom_button_style_options', 'theme_button_style_options');
