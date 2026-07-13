<?php
/**
 * Created by PBHS Inc.
 * Global Option Loader for toolOptions
 */

global $toolOptions;

$templateUrl = trailingslashit( get_template_directory_uri() );
$uploadDir = wp_get_upload_dir();

$toolOptions =
array (
  'h1-font' => '',
  'h1-size' => '',
  'h1-color' => '',
  'h2-font' => '',
  'h2-size' => '',
  'h2-color' => '',
  'h3-font' => '',
  'h3-size' => '',
  'h3-color' => '',
  'p-font' => '',
  'p-size' => '',
  'p-color' => '',
  'custom-css' => 'div#part-content-block-3-images-2 .content-images img:last-of-type {
    width: 32%;
}

div#part-content-block-3-images-2 .content-images img:first-of-type {
    width: 68%;
}

body#home div.pbhs-website-notice.pbhs-website-notice-position-top.pbhs-website-notice-palette-red a {
  text-decoration:none !important;
}

body#home div.pbhs-website-notice.pbhs-website-notice-position-top.pbhs-website-notice-palette-red h2 {
  margin-top:20px;
  color:#ffffff !important;
  font-weight:bold;
  padding:0px 10px;
}

body#home div.pbhs-website-notice.pbhs-website-notice-position-top.pbhs-website-notice-palette-red p {
  font-size:80%;
  padding:10px;
  margin:0px 10px;
  line-height:1.2em;
}

/*Code for fixing the mobile covid alert and nav menu interaction, will eventually remove with COVID alert, Start*/
@media only screen and (max-width:767px) {
div#part-component-area-single-1 {
  margin-top:50px;
}
  div.pbhs-website-notice.pbhs-website-notice-position-top.pbhs-website-notice-palette-red {
    position: fixed;
    top: 40px;
    width: 100%;
    z-index: 99;
}
}
/*Code for fixing the mobile covid alert and nav menus, will remove with COVID alert, End*/

.pbhs-website-notice-palette-red {
  background-color: #74bdc2 !important;
}

/* START CTA-MAIN: added on November 10 2021 */
/* Style Definitions – Edit These */
:root {
--seo-cta-border: 1px solid #4a7a7d; /* border width, style, and color */
--seo-cta-text-color: #000000; /* text color */
--seo-cta-background-color: #74bdc2; /* background color*/
--seo-cta-padding: 10px; /* padding between border and interior elements */
--seo-cta-margin: 20px; /* margin between border and exterior elements */
--seo-cta-text-align: center; /* text alignment */
--seo-cta-button-text-color: #FFFFFF; /* button normal text color */
--seo-cta-button-background-color: #4a7a7d; /* button normal background color */
--seo-cta-button-hover-text-color: #FFFFFF; /* button hover text color */
--seo-cta-button-hover-background-color: #355658; /* button hover background color */
}
/* End Style Definitions */
/* CTA Styles – Do Not Edit */
div.seo-cta-main {
border: var(--seo-cta-border);
color: var(--seo-cta-text-color);
background: var(--seo-cta-background-color);
padding: var(--seo-cta-padding);
margin: var(--seo-cta-margin);
text-align: var(--seo-cta-text-align);
}
div.seo-cta-header+div.seo-cta-main {
border-top: none;
margin-top: 0%;
}
div.seo-cta-header {
border: var(--seo-cta-border);
border-bottom: none;
color: var(--seo-cta-text-color);
background: var(--seo-cta-background-color);
padding: var(--seo-cta-padding);
margin: var(--seo-cta-margin);
margin-bottom: 0%;
text-align: var(--seo-cta-text-align);
}
div.seo-cta-header * {
margin-bottom: 0%;
padding-bottom: 0%;
text-align: var(--seo-cta-text-align);
}
div.seo-cta-main a.btn.btn-default, div.seo-cta-main button {
color: var(--seo-cta-button-text-color);
background: var(--seo-cta-button-background-color);
padding: 10px !important;
}
div.seo-cta-main a.btn.btn-default:hover, div.seo-cta-main button:hover {
color: var(--seo-cta-button-hover-text-color);
background: var(--seo-cta-button-hover-background-color);
}
div.seo-cta-header h3 {
font-weight: 700;
}
@media only screen and (max-width:767px) {
div.seo-cta-main a.btn.btn-default {
margin-bottom: 5px;
}
}
/* End CTA Styles */
/* END CTA MAIN */',
  'custom-mobile-css' => '',
  'custom-flash' => '',
  'custom-script' => '',
  'custom-footer-script' => '<script> 
/* cta phone call */ 
var seoPhoneCallLinks = document.querySelectorAll(\'.seo-cta-phone-call\'); 
for (var i = 0; i < seoPhoneCallLinks.length; i++) { 
seoPhoneCallLinks[i].addEventListener(\'click\', function(){gtag(\'event\',\'cta_phone_call\',{\'event_category\':\'seo_cta\',\'event_label\':\'phone_call\',\'send_to\':[\'default\',\'ua\']});}); 
} 

/* cta phone modal */ 
var seoPhoneModalLinks = document.querySelectorAll(\'.seo-cta-phone-modal\'); 
for (var i = 0; i < seoPhoneModalLinks.length; i++) { 
seoPhoneModalLinks[i].addEventListener(\'click\', function(){gtag(\'event\',\'seo_phone_modal\',{\'event_category\':\'seo_cta\',\'event_label\':\'phone_modal\',\'send_to\':[\'default\',\'ua\']});}); 
} 

/* seo contact-form */ 
var seoContactFormLinks = document.querySelectorAll(\'.seo-cta-contact-form\'); 
for (var i = 0; i < seoContactFormLinks.length; i++) { 
seoContactFormLinks[i].addEventListener(\'click\',function(){gtag(\'event\',\'cta_contact_form\',{\'event_category\':\'seo_cta\',\'event_label\':\'contact_form\',\'send_to\':[\'default\',\'ua\']});}); 
} 
</script>',
  'custom-body-script' => '',
  'name_conjunction' => 'or',
  'typekit_override' => '',
  'typekit_mobile_override' => '',
  'google_fonts' => '',
  'script_includes' => '',
  'style_includes' => '',
  'robots_includes' => '',
  'dev_notes' => '',
  'enable_bwp_minify' => 'false',
  'country_blocked' => 'false',
  'google_blocked' => 'false',
  'country_blocking_google' => 0,
  'google_ads_txt' => '',
  'ads_txt' => '',
);