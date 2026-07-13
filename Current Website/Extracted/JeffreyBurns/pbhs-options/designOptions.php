<?php
/**
 * Created by PBHS Inc.
 * Global Option Loader for designOptions
 */

global $designOptions;

$templateUrl = trailingslashit( get_template_directory_uri() );
$uploadDir = wp_get_upload_dir();

$designOptions =
array (
  'buttonStyleTheme' => 'button-basic',
  'footerEnabled' => 'true',
  'footer' => '',
  'c_palette_a' => 
  array (
    'variants' => 
    array (
      0 => 
      array (
        'HEX' => 'ffffff',
        'defaultColor' => 'ffffff',
        'RGB' => '255,255,255',
        'tip' => 'Color #1 Text Color',
        'noReversal' => false,
      ),
    ),
    'useDefaults' => true,
    'defaultColor' => '74bdc2',
    'HEX' => '74bdc2',
    'RGB' => '116,189,194',
    'tip' => 'Color #1 Background',
  ),
  'c_palette_b' => 
  array (
    'variants' => 
    array (
      0 => 
      array (
        'HEX' => '979797',
        'defaultColor' => '979797',
        'RGB' => '151,151,151',
        'tip' => 'Color #2 Text Color',
        'noReversal' => false,
      ),
    ),
    'useDefaults' => true,
    'defaultColor' => 'ffffff',
    'HEX' => 'ffffff',
    'RGB' => '255,255,255',
    'tip' => 'Color #2 Background',
  ),
  'c_palette_c' => 
  array (
    'variants' => 
    array (
      0 => 
      array (
        'HEX' => 'dcdcdc',
        'defaultColor' => 'dcdcdc',
        'RGB' => '220,220,220',
        'tip' => 'Color #3 Text Color',
        'noReversal' => false,
      ),
    ),
    'useDefaults' => true,
    'defaultColor' => '3e3e3e',
    'HEX' => '3e3e3e',
    'RGB' => '62,62,62',
    'tip' => 'Color #3 Background',
  ),
  'navButtons' => 
  array (
    0 => 107,
    1 => 16,
    2 => 665,
  ),
  'navButtonsIcon' => 
  array (
    0 => 'pbhs-map-marker',
    1 => 'pbhs-calendar-planner',
    2 => 'pbhs-form-clipboard-check',
    3 => 'fa-user',
  ),
  'photos' => 
  array (
    0 => $templateUrl.'/_media/exported-videos/Web Banner V6-cvyesk4svu.mp4'
  ),
  '' => NULL,
);