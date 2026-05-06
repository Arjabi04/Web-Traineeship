<?php

function team_metabox()
{
    add_meta_box(
        'team_details_metabox',
        'Team Member Details',
        'team_metabox_callback',
        'team',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'team_metabox');

function team_metabox_callback($post)
{
    wp_nonce_field('team_save_meta', 'team_nonce');

    $position   = get_post_meta($post->ID, '_team_position', true);
    $experience = get_post_meta($post->ID, '_team_experience', true);
    $address    = get_post_meta($post->ID, '_team_address', true);
    $phone      = get_post_meta($post->ID, '_team_phone', true);
?>
    <p>
        <label for="team_position"><?php _e('Position', 'team'); ?></label>
        <input type="text" name="team_position" id="team_position"
            value="<?php echo esc_attr($position); ?>" />
    </p>

    <p>
        <label for="team_experience"><?php _e('Years of Experience', 'team'); ?></label>
        <input type="number" name="team_experience" id="team_experience"
            value="<?php echo esc_attr($experience); ?>" />
    </p>

    <p>
        <label for="team_address"><?php _e('Address', 'team'); ?></label>
        <input type="text" name="team_address" id="team_address"
            value="<?php echo esc_attr($address); ?>" />
    </p>

    <p>
        <label for="team_phone"><?php _e('Contact Number', 'team'); ?></label>
        <input type="text" name="team_phone" id="team_phone"
            value="<?php echo esc_attr($phone); ?>" />
    </p>
<?php
}

function mytheme_save_team_metabox($post_id)
{
    if (!isset($_POST['team_nonce'])) return;
    if (!wp_verify_nonce($_POST['team_nonce'], 'team_save_meta')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    if (isset($_POST['team_position'])) {
        update_post_meta($post_id, '_team_position', sanitize_text_field($_POST['team_position']));
    }

    if (isset($_POST['team_experience'])) {
        update_post_meta($post_id, '_team_experience', sanitize_text_field($_POST['team_experience']));
    }

    if (isset($_POST['team_address'])) {
        update_post_meta($post_id, '_team_address', sanitize_text_field($_POST['team_address']));
    }

    if (isset($_POST['team_phone'])) {
        update_post_meta($post_id, '_team_phone', sanitize_text_field($_POST['team_phone']));
    }
}
add_action('save_post', 'mytheme_save_team_metabox');
