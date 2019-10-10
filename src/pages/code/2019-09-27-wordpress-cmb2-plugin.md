---
templateKey: blog-post
title: WordPress CMB2 Plugin
date: 2019-09-27T20:23:28.808Z
description: 'Simple code which helped me create a metabox with plugin: CMB2 in WordPress.'
archive: false
tags:
  - WordPress
  - CMB2
category: Code
---
In the world of WordPress, there are unique things called 'Metabox.' These boxes are created to give freedom to the users who wishes to create a custom fields for the users to use and display data into the front end. In my work, I had to use this plugins, and here's some code that helped me out:

## CMB2

The plugin that I used was called [CMB2](https://github.com/CMB2/CMB2).

First, we need to create a function in `function.php` to display the form in the admin section:

```php
add_action( 'cmb2_admin_init', 'cmb2_sample_metaboxes' );
/* Define the metabox and field configurations.*/

function cmb2_sample_metaboxes() {    
  /*     
  * Initiate the metabox     
  */    
  // This code creates the outer box of the Metabox    
  $cmb = new_cmb2_box( array(
    'id'            => 'test_metabox',
    'title'         => __( 'Test Metabox', 'cmb2' ),
    'object_types'  => array( 'page', ), // Post type - Can find it in the url
    'context'       => 'normal', // Or can set as advanced or side
    'priority'      => 'high',
    'show_names'    => true, // Show field names on the left        
    // 'cmb_styles' => false, 
    // false to disable the CMB stylesheet
    // 'closed'     => true, 
    // Keep the metabox closed by default    
    ) );    
    // Regular text field - there are other lists of fields that can be implemented
    
  $cmb->add_field( array(
    'name'       => __( 'Test Text', 'cmb2' ),
    'desc'       => __( 'field description (optional)', 'cmb2' ),
    'id'         => 'yourprefix_text',
    'type'       => 'text',        
    'show_on_cb' => 'cmb2_hide_if_no_cats', // function should return a bool value
    // 'sanitization_cb' => 'my_custom_sanitization', 
    // custom sanitization callback parameter        
    // 'escape_cb'       => 'my_custom_escaping',  
    // custom escaping callback parameter        
    // 'on_front'        => false, /
    / Optionally designate a field to wp-admin only        
    // 'repeatable'      => true,   
  ) );
}
```



Once this code is implemented, 

All we need is just implement a single code to start extracting the data from the admin:

```php
$text = get_post_meta( get_the_ID(), '_yourprefix_text', true );
```
