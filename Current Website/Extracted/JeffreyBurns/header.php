<?php
/**
 * Header
 *
 * @package PbhsTheme
 */

?>
<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="ie6 oldie" id="html" lang="en"> <![endif]-->
<!--[if IE 7]>
<html class="ie7 oldie" id="html" lang="en"> <![endif]-->
<!--[if IE 8]>
<html class="ie8 oldie" id="html" lang="en"> <![endif]-->
<!--[if IE 9]>
<html class="ie9 oldie" id="html" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->
<html lang="en" id="html" class="normal">
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <?php

    /*
     *	PBHS Custom HTML Meta Information Output
     *	@class PBHS_HTML_Meta => pbhs-common-plugin/classes/pbhs-html-meta.php
     */
    pbhs_header();

    /*
     *    WordPress HTML Header output
     *    Outputs enqueued style sheets and scripts and runs additional functions added
     *    to the wp_head action
     */
    wp_head(); // Scripts and Stylesheets.
    ?>
    <script>
        const bannerImgWidth=1900;
        const bannerImgHeight=929
    </script>
    <!-- style overrides for when javascript is not available -->
    <noscript>
        <style>
            .menu-full {
                visibility: visible;
            }
        </style>
    </noscript>
</head>

<?php
// @pbhs_body_styles => pbhs-common-plugin/pbhs-common-plugin.php.
// add body tag classes - pass an array to added additional classes.
?>
<body <?php pbhs_body_styles(); ?>>
<?php pbhs_after_body_tag(); ?>
<div id='pageWrap'>
    <?php
    $phone    = pbhs_get_phone();
    $home_url = home_url();
    ?>
    <header id="header">
        <?php
        // Mobile Navigation.
        get_template_part( '_parts/navigation', 'mobile' );
        ?>
    </header><!-- / #header -->
