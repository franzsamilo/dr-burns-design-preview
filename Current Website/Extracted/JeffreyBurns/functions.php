<?php


use pbhscore\Options;

// Theme Includes.
include __DIR__ . '/_includes/config.php'; // Configuration Parameters.

add_shortcode('BUTTON', 'part_three_d_button');
add_shortcode('MODAL_FORM_BUTTON', 'appointment_button');

function pbhs_enqueue_scripts()
{

    pbhs_enqueue_style(
        [
            'bootstrap3',
            'bootstrap-flex',
            'font-fontawesome',
            'pbhs-helpers',
            'pbhs-utilities',
            'pbhs-slider',
            'superfish',
            'pbhs-mediabox',
            'pbhs-base',
            'flickity-css',
        ]
    );

    $parts = [
        'additional',
        'banner',
        'component-area-single',
        'content-block',
        'content-block-3-images',
        'content-block-image',
        'doctor',
        'featured-pages',
        'footer',
        'member-office-combo',
        'navigation',
        'navigation-columns',
        'sets-us-apart',
        'staff',
        'testimonials',
        'topbar-tablet',
    ];

    foreach ($parts as $part) {
        $part = strtolower($part);
        wp_enqueue_style("part-{$part}", get_template_directory_uri() . '/_css/parts/' . $part . '.css', [], '1.0');
    }

    $components = [
        'additional',
        'breadcrumb',
        'client-logo',
    ];

    foreach ($components as $component) {
        wp_enqueue_style("component-{$component}", get_template_directory_uri() . '/_css/components/' . $component . '.css', [], '1.0');
    }


    pbhs_enqueue_script(
        [
            'jquery',
            'pbhs-init-head',
            'pbhs-modernizr',
            'pbhs-theme',
            'pbhs-slider',
            'pbhs-jquery-fluid-box',
            'flickity-js',
        ]
    );


    pbhs_enqueue_script(
        [
            'bootstrap3',
            'pbhs-scalefont',
            'pbhs-mediabox-shadowbox-adapter',
            'pbhs-jquery-flash',
            'pbhs-superfish2',
            'pbhs-products',
            'pbhs-gformplaceholder',
            'scroll-reveal3',
            'flickity-js',
            'pbhs-utility-scroll-triggers',
            'pbhs-utility-lazy-load',
            'pbhs-init',
        ],
        true
    );



    $local = Options::$data->app->isLocal();
    $min_ext = $local ? '' : '.min';
    $directory_uri = get_template_directory_uri();

    if (!is_admin()) {
        wp_dequeue_style('wp-block-library');
    }
    if ((!is_admin()) && is_singular() && comments_open() && get_option('thread_comments')) {
        pbhs_enqueue_script('comment-reply');
    }

    if (!\defined('PBHS_ADMIN') || !PBHS_ADMIN) {
        $wp_styles = wp_styles();
        if (isset($wp_styles->registered['bootstrap3'])) {
            $wp_styles->registered['bootstrap3']->src = get_template_directory_uri() . '/_css/_vendor/bootstrap-custom.css';
        }
    }
}

pbhs_add_action('wp_enqueue_scripts', 'pbhs_enqueue_scripts');


if (!function_exists('get_asset')) {
    /**
     * Returns the url to a file in the _media/assets directory
     *
     * @param string|null $filename the file to create a url for.
     * @param string|null $directory the directory to find the file in.
     *
     * @return string an asset url
     */
    function get_asset($filename = null, $directory = null)
    {
        if (null === $filename) {
            return null;
        }
        $uri = trailingslashit(get_template_directory_uri());
        $directory = null !== $directory ? trailingslashit(ltrim($directory, '/')) : '_media/assets/';

        return esc_url($uri . $directory . ltrim($filename, '/'));
    }
}

if (!function_exists('load_file_content')) {
    /**
     * Returns the contents of a file if it exists.
     *
     * @param string|null $path the path to the component.
     *
     * @return string|null the component markup or null.
     */
    function load_file_content($path = null)
    {
        if (null === $path) {
            return null;
        }
        $file = trailingslashit(get_template_directory()) . ltrim($path, '/');
        if (!file_exists($file)) {
            return null;
        }
        ob_start();
        include($file);

        return ob_get_clean();
    }
}

if (!function_exists('pbhs_get_title')) {

    function pbhs_get_title($id)
    {
        $title = get_post_meta($id, '_featured_title', true);
        if ('' === $title) {
            $title = get_the_title($id);
        }

        return $title;
    }
}

function JeffreyBurns_uploads_url($path): string
{
    return trailingslashit(wp_get_upload_dir()['baseurl']) . ltrim($path, '/');
}


function JeffreyBurns_video_url(string $id): string
{
    $videoName = match ($id) {
        'f8b7e7ad3y' => 'Burns-for-banner-f8b7e7ad3y.mp4',
        'amsidehh0q' => 'Burns_DDS_-_About_Dr_Burns_V2-amsidehh0q.mp4',
        'ctr0cg44xc' => 'Burns_DDS_-_Crowns_and_Bridges_V5-ctr0cg44xc.mp4',
        '1et3q52qbc' => 'Burns_DDS_-_Dental_Implants_V5-1et3q52qbc.mp4',
        '5g7ae9bqsg' => 'Burns_DDS_-_Office_tour_V5-5g7ae9bqsg.mp4',
        'iuabmk1w3t' => 'Burns_DDS_-_Practice_Overview_V5-iuabmk1w3t.mp4',
        '65gz9n2hui' => 'SPA_122_-_Overview_V5-65gz9n2hui.mp4',
        'nh613cmb9t' => 'SPA_122_-_services_V6-nh613cmb9t.mp4',
        '6i9pb8x12m' => 'SPA_122_Dr_Whitney_Bio_V5-6i9pb8x12m.mp4',
        'ly805g91su' => 'SPA_122_Office_Tour_V7-ly805g91su.mp4',
        'ecmativvs7' => 'Testimonial_1_V5-ecmativvs7.mp4',
        '5jh4it424o' => 'Testimonial_2_V5-5jh4it424o.mp4',
        'n0x734x7k4' => 'Testimonial_3_V5-n0x734x7k4.mp4',
        '9vr2q86wws' => 'Testimonial_4_V5-9vr2q86wws.mp4',
        'i1tjclrnp8' => 'Testimonial_5_V5-i1tjclrnp8.mp4',
        '6dchbjy0bl' => 'Testimonial_6_V5-6dchbjy0bl.mp4',
        '6k6bi465fa' => 'Web Banner V5-6k6bi465fa.mp4',
        'cvyesk4svu' => 'Web Banner V6-cvyesk4svu.mp4',
        default => 'Web Banner V6-cvyesk4svu.mp4',
    };

    return get_template_directory_uri() . '/_media/exported-videos/' . $videoName;
}

function JeffreyBurns_video($atts): string
{
    if (!isset($atts['id'])) {
        return '';
    }
    $url = JeffreyBurns_video_url($atts['id']);
    return <<< HTML
<video controls poster src="$url"></video>
HTML;
}

add_shortcode('WISTIA', 'JeffreyBurns_video');

add_filter('the_content', function ($content) {
    $pattern = "/<div class='wistia_embed wistia_async_([a-zA-Z0-9]+).*?'><\/div>/";

    return preg_replace_callback($pattern, function ($matches) {
        $video_id = esc_attr($matches[1]);
        return JeffreyBurns_video(['id' => $video_id]);
    }, $content);
});

// Register Footer Menu
function register_my_menus() {
    register_nav_menus(array(
		'main_menu' => __('Main Menu'),
        'footer_menu' => __('Footer Menu'),
		'footer_menu2' => __('Footer Secondary Menu')
    ));
}
add_action('after_setup_theme', 'register_my_menus');
 
// class Custom_Walker_Nav_Menu extends Walker_Nav_Menu {
//     // Add classes to <li>
//     function start_lvl(&$output, $depth = 0, $args = array()) {
//         $output .= '<ul class="children">';
//     }

//     function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
//         $classes = empty($item->classes) ? array() : (array) $item->classes;

//         // Determine if the item has children
//         $has_children = in_array('menu-item-has-children', $classes);
//         $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item));

//         $output .= '<li class="' . esc_attr($class_names) . '">';

//         $attributes  = !empty($item->url) ? ' href="' . esc_url($item->url) . '"' : '';
//         $attributes .= ' data-searchable-tag="' . esc_attr($item->title) . '"';
//         $attributes .= ' id="nav' . esc_attr($item->menu_order - 1) . '"';

//         $output .= '<a' . $attributes . '>' . esc_html($item->title) . '</a>';
//     }

//     function end_el(&$output, $item, $depth = 0, $args = array()) {
//         $output .= '</li>';
//     }

//     function end_lvl(&$output, $depth = 0, $args = array()) {
//         $output .= '</ul>';
//     }
// }
// 


function shortcode_testimonials_1() {
    ob_start();
    get_template_part('layouts/frontpage/part-testimonials-1');
    return ob_get_clean();
}
add_shortcode('testimonials_1', 'shortcode_testimonials_1');


// Enable featured images
add_theme_support('post-thumbnails');

// Force enable featured image meta box
function force_featured_image_meta_box() {
    add_meta_box('postimagediv', __('Featured Image'), 'post_thumbnail_meta_box', 'post', 'side', 'high');
    add_meta_box('postimagediv', __('Featured Image'), 'post_thumbnail_meta_box', 'page', 'side', 'high');
}
add_action('add_meta_boxes', 'force_featured_image_meta_box');


// Enable Schema Script Field on Pages
// Register Schema Markup meta box
function jb_schema_meta_box() {
  add_meta_box(
      'jb_schema_markup',
      'Schema Markup (JSON-LD)',
      'jb_schema_meta_box_html',
      ['page', 'post'],
      'normal',
      'high'
  );
}
add_action('add_meta_boxes', 'jb_schema_meta_box');

function jb_schema_meta_box_html($post) {
  wp_nonce_field('jb_schema_nonce', 'jb_schema_nonce_field');
  $value = get_post_meta($post->ID, '_jb_schema_markup', true);
  echo '<textarea name="jb_schema_markup" style="width:100%;height:200px;font-family:monospace;font-size:12px;">' . esc_textarea($value) . '</textarea>';
  echo '<p style="color:#666;">Paste the full <code>&lt;script type="application/ld+json"&gt;...&lt;/script&gt;</code> block here.</p>';
}

function jb_schema_save_meta($post_id) {
  if (!isset($_POST['jb_schema_nonce_field']) || !wp_verify_nonce($_POST['jb_schema_nonce_field'], 'jb_schema_nonce')) return;
  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
  if (!current_user_can('edit_post', $post_id)) return;
  if (isset($_POST['jb_schema_markup'])) {
      update_post_meta($post_id, '_jb_schema_markup', wp_unslash($_POST['jb_schema_markup']));
  }
}
add_action('save_post', 'jb_schema_save_meta');

// Output schema in <head>
function jb_output_schema() {
  if (!is_singular()) return;
  $schema = get_post_meta(get_the_ID(), '_jb_schema_markup', true);
  if ($schema) {
      echo "\n" . $schema . "\n";
  }
}
add_action('wp_head', 'jb_output_schema');
