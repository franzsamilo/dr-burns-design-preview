<?php
/**
 * Created by PBHS Inc.
 * Global Option Loader for templateSettings
 */

global $templateSettings;

$templateUrl = trailingslashit( get_template_directory_uri() );
$uploadDir = wp_get_upload_dir();

$templateSettings =
array (
  'homeLink' => 'true',
  'practiceName' => 'Jeffrey S. Burns DDS',
  'fullName' => 'Jeffrey S. Burns, DDS',
  'lastName' => '<a href="https://www.jeffreyburns.com/about-us/dr-jeffrey-burns/" title="Jeffrey S. Burns, DDS">Dr. Burns</a>',
  'address' => '9626 South Congress St',
  'city' => 'New Market',
  'state' => 'VA',
  'zip' => '22844',
  'country' => '[COUNTY]',
  'phone' => '540-740-8937',
  'fax' => '540-740-9227',
  'specialty' => 'Cosmetic Dentistry',
  'specialist' => 'Dentist',
  'titaniumSite' => 'false',
  'showLogo' => 'true',
  'logoLocation' => '0,0',
  'contactForm' => 'true',
  'socialMediaButtons' => 'hide',
  'facebookURL' => '',
  'facebookDisplay' => 'hide',
  'twitterAccount' => '',
  'nearbyLocationsText' => 'Proudly serving Shenandoah County, Page County, Rockingham County and the communities of:',
  'nearbyLocations' => 'Timberville;Broadway;Mount Jackson;Stanley;Luray;Harrisonburg;Quicksburg;Woodstock;Basye;Edinburg;Elkton;Bridgewater',
  'sm_admin_page_fixed' => true,
  'members' => 
  array (
    0 => 
    array (
      'fullName' => 'Jeffrey S. Burns',
      'lastName' => 'Burns',
      'page' => 1383,
      'guid' => '5080',
      'postFix' => 'DDS',
      'image' => '1443',
    ),
  ),
  'offices' => 
  array (
    0 => 
    array (
      'address' => '9626 South Congress St',
      'city' => 'New Market',
      'state' => 'VA',
      'zip' => '22844',
      'country' => 'United States',
      'phone' => '540-740-8937',
      'fax' => '540-740-9227',
      'page' => 107,
      'guid' => '1fe4',
      'name' => 'Jeffrey S. Burns DDS Office',
      'lat' => 38.641861,
      'long' => -78.675446,
      'hours' => 
      array (
        'monday' => '8:00 AM-3:00 PM',
        'tuesday' => '8:00 AM-3:00 PM',
        'wednesday' => '8:00 AM-3:00 PM',
        'thursday' => '8:00 AM-3:00 PM',
        'friday' => '',
      ),
      'cid' => 'ChIJtyjtDWH4tIkRGbGJIczs1Hg',
      'image' => '1725',
      'placeId' => 'ChIJtyjtDWH4tIkRGbGJIczs1Hg',
    ),
  ),
  'showPracticeName' => 'true',
  'logo' => 1573,
  'dr_prefix' => 'true',
  'dr_link_pages' => 'true',
  'showCity' => 'true',
  'showPhone' => 'true',
  'customMobile' => 'false',
  'customMobileURL' => '',
  'customMobileCookie' => '',
  'mobileTheme' => '',
  'socialMediaButtonsCustom' => ';email;facebook;favorites;more;google;twitter',
  'socialMediaButtonsType' => 'like',
  'socialMediaButtonsSize' => 'large',
  'googleTrackingCode' => 'UA-158784823-1',
  'secondaryGoogleTrackingCode' => '',
  'googleTrackingSpecialty' => 'General Dentist',
  'includePbhsGoogleAggregate' => 'true',
  'showLanguageSelect' => 'false',
  'languageSelectLocation' => 'right vertical',
  'languageSelectColor' => 
  array (
    'HEX' => '000000',
    'RGB' => '0,0,0',
    'defaultColor' => '000000',
    'useDefaults' => true,
    'variants' => 
    array (
      0 => 
      array (
        'defaultColor' => 'BlackOrWhite',
        'HEX' => 'FFFFFF',
        'tip' => 'Label Text Color',
        'RGB' => '255,255,255',
        'noReversal' => false,
      ),
    ),
  ),
  'showMexicoFlag' => 'true',
  'altEsFlag' => 'es',
  'avVideos' => 'false',
  'disabledHts' => '',
  'seoContentActive' => 'false',
  'seoLevel' => 1,
  'seoStage' => 1,
  'defaultSchema' => 'false',
  'schemaSpecialtyScope' => 'Dentist',
  'ctaEnabled' => 'true',
  'callsToAction' => 'For more information about [TITLE] or to schedule a consultation with [LAST_NAME], call our office in [CITY], [STATE] at [PHONE].',
  'custom_snippets' => 
  array (
    0 => 
    array (
      'snippet_id' => 'newcta',
      'snippet_text' => '<!--Procedures--><div class="seo-cta-header"> <h3>Are You in Need of Excellent Dental Treatment?</h3> <p> [LAST_NAME format="prefix" conjunction="and" link="false"] can preserve your oral health, treat a variety of dental problems, and improve your smile. Contact us to learn more!</p></div>[CUSTOM_SNIPPET id=cta]',
    ),
    1 => 
    array (
      'snippet_id' => 'cta',
      'snippet_text' => '<div class="seo-cta-main">  [PHONE class="btn btn-default preserve-styles seo-cta-phone-call" icon="fa fa-phone" text_before_icon="Call us: "] [PBHS_MODAL_FORM class="btn btn-default seo-cta-contact-form"]<i class="fa fa-calendar"></i> Request An Appointment[/PBHS_MODAL_FORM]<script>gtag(\'event\',\'cta_display\',{\'event_category\':\'seo_cta\',\'event_label\':\'cta\',\'send_to\':[\'default\',\'ua\'],\'non_interaction\':true});</script></div>',
    ),
    2 => 
    array (
      'snippet_id' => 'cta-gen',
      'snippet_text' => '<!--General--><div class="seo-cta-header"> <h3>Your Teeth Deserve Comprehensive Care</h3> <p> [LAST_NAME conjunction="and" format="prefix" link="false"] and his staff are qualified to handle all aspects of your care, so you are always surrounded by people that you trust. Contact us today!</p></div>[CUSTOM_SNIPPET id=cta]',
    ),
  ),
  'removeHpNoodp' => 'false',
  'favicon' => 'true',
  'googleVerification' => '',
  'bingVerification' => '',
  'passwordPageMsg' => '',
  'copyrightBeginYear' => '2019',
  'disableCopyrightPrefix' => 'false',
  'clientWistiaId' => 'urukm3mkpp',
  'enableAdaTaglines' => 'false',
  'adaTaglineLevelTwo' => 'false',
  'adaTaglinePlacement' => 'copyright-after',
  'ndn_entities' => 
  array (
    0 => 
    array (
      'guid' => 'bad5',
    ),
  ),
  'themeVerOverwrite' => '1.02',
  'enableAccessibility' => 'true',
  'accessibilityDefaultLocation' => 'SW',
  'socialURLs' => 
  array (
    0 => 'https://www.facebook.com/JeffreySBurnsDDS/',
    1 => 'https://www.instagram.com/jeffreys.burnsdds/',
  ),
  'postFix' => '[POSTFIX]',
  'accessibilityPreview' => 'false',
  'enableLaunchChat' => 'false',
  'advSchema' => 'true',
  'adv_schemaSpecialtyScope' => 'Physician',
  'schemanameoverride' => '',
  'schemalegalname' => '',
  'schemafoundingdate' => '',
  'schemaOfficeImage' => 'https://www.jeffreyburns.com/files/2019/10/logo.png',
  'socialURLsschema' => 
  array (
    0 => '',
  ),
  'schemaSpecialty' => 
  array (
    0 => 'http://www.productontology.org/id/Dentistry',
  ),
  'availableservices' => 'Amalgam_(dentistry), Bridge_(dentistry), CAD/CAM_dentistry, CEREC, Clear_aligners, Clear_aligners#Align_Technology, Cosmetic_dentistry, Crown_(dentistry), Dental_bonding, Dental_composite, Dental_extraction, Dental_fear, Dental_laser, Dental_restoration, Dental_sealant, Dentures, Digital_radiography, Fixed_prosthodontics, Holistic_dentistry, Inlays_and_onlays, Mouthguard, Nitrous_oxide_(medication), Oral_hygiene, Pediatric_dentistry, Periodontal_disease, Removable_partial_denture, Sedation_dentistry, Teeth_cleaning, Tooth_brushing, Tooth_decay, Tooth_whitening, Veneer_(dentistry)',
  'facebookPixelId' => '',
  'enableShortcodeProtection' => 'true',
  'pbhsWebsiteNoticeEnable' => 'false',
  'pbhsWebsiteNoticeText' => 'customText',
  'pbhsWebsiteNoticeVisibility' => 'all',
  'pbhsWebsiteNoticePosition' => 'top',
  'pbhsWebsiteNoticeColor' => 'red',
  'pbhsWebsiteNoticeCustomText' => 'COVID-19 Office Re-Opening',
  'pbhsWebsiteNoticeDialogEnable' => 'false',
  'pbhsWebsiteNoticeDialogTitle' => '',
  'pbhsWebsiteNoticeDialogKey' => 'alertDialog',
  'pbhsWebsiteNoticeDialogAction' => 'popup-session',
  'pbhsWebsiteNoticeDialogVisibility' => 'home',
  'pbhsWebsiteNoticeDialogColor' => 'light',
  'pbhsWebsiteNoticeDialogContent' => '',
  'pbhsWebsiteAccessCurrentMode' => 0,
  'launchChatAIKey' => '',
  'wistia_seo_class' => 'false',
  'clientRevenueWellId' => '',
  'launchChatAIMultiOffice' => 'false',
  'videoPlayerColorDefault' => '',
  'ga4TrackingCode' => 'G-GQM79V1M1V',
  'additionalGa4TrackingCodes' => 
  array (
    0 => '',
  ),
  'additionalUaTrackingCodes' => 
  array (
    0 => '',
  ),
  'careCreditPageEnable' => 'true',
  'careCreditLink' => '',
  'specialty_primary' => 'Dentistry',
  'salesforce_id' => '0013600001EUDdMAAX',
  'pbhsWebsiteNoticePageId' => 1746,
);