<?php
/**
 * Created by PBHS Inc.
 * Global Option Loader for row_config_footer
 */

global $row_config_footer;

$templateUrl = trailingslashit( get_template_directory_uri() );
$uploadDir = wp_get_upload_dir();

$row_config_footer =
array (
  'width' => 'boxed',
  'column_stack' => 'xs_stack',
  'columns' => 
  array (
    0 => 
    array (
      'size' => 12,
      'halign' => 'center',
      'valign' => 'top',
      'snippets' => 
      array (
        0 => 'contact',
        1 => 'social_icons',
        2 => 'custom_body_text_385f',
        3 => 'navigation_links',
        4 => 'featured_pages_51e7',
        5 => 'copyright',
      ),
    ),
  ),
  'snippet_options' => 
  array (
    'navigation_links' => 
    array (
      'option_defaults' => 
      array (
        'vertical_padding' => 'default',
      ),
    ),
    'contact' => 
    array (
      'option_defaults' => 
      array (
        'header_text' => '',
        'body_text' => '',
      ),
    ),
    'featured_pages_51e7' => 
    array (
      'option_defaults' => 
      array (
        'featured_pages' => 
        array (
          0 => 1415,
          1 => 64,
          2 => 311,
          3 => 57,
          4 => 170,
          5 => 174,
          6 => 29,
          7 => 186,
          8 => 59,
          9 => 176,
        ),
        'header_text' => '',
        'body_text' => '',
        'list_columns' => 'inline',
      ),
      'instance_id' => '51e7',
    ),
    'custom_body_text_385f' => 
    array (
      'option_defaults' => 
      array (
        'body_text' => '<p>[SEARCH]</p>',
      ),
      'instance_id' => '385f',
    ),
  ),
);