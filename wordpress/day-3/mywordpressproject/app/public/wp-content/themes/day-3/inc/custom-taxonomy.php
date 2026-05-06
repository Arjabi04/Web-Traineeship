<?php
function create_team_taxonomies()
{
    $labels = array(
        'name'          => 'Team Departments',
        'singular_name' => 'Department',
        'menu_name'     => 'Departments',
    );
    register_taxonomy(
        'team_department',
        array('team'),
        array(
            'hierarchical' => true,
            'labels'       => $labels,
            'rewrite'      => array(
                'slug'       => 'team-category',
            ),
        )
    );
}
add_action('init', 'create_team_taxonomies', 0);
