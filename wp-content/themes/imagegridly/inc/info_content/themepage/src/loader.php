<?php
defined("ABSPATH") || exit();


add_action('admin_menu', 'imagegridly_themepage');
function imagegridly_themepage()
{
    add_menu_page(__('Theme Settings', 'imagegridly'), __('Theme Settings', 'imagegridly'), 'manage_options', 'imagegridly_themepage', 'imagegridly_themepage_content', get_template_directory_uri() . '/inc/info_content/themepage/src/wp-icon-superb.svg', 61);
}

function imagegridly_themepage_content()
{
    require_once(trailingslashit(get_template_directory()) . 'inc/info_content/themepage/src/themepage.php');
}

function imagegridly_comparepage_css($hook)
{
    if ('toplevel_page_imagegridly_themepage' != $hook) {
        return;
    }
    wp_enqueue_style('imagegridly-custom-style', get_template_directory_uri() . '/inc/info_content/themepage/src/compare.css');
}
add_action('admin_enqueue_scripts', 'imagegridly_comparepage_css');

// Theme page end
