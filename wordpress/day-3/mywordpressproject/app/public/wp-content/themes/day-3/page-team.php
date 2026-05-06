<?php

/**
 * Template Name: Team Members Page
 */

get_header(); ?>

<div class="team-section">
    <h1><?php the_title(); ?></h1>

    <?php
    // Get all department terms
    $departments = get_terms(array(
        'taxonomy'   => 'team_department',
        'hide_empty' => true,
    ));
    ?>

    <?php if (!empty($departments) && !is_wp_error($departments)) : ?>

        <!-- Tabs -->
        <div class="team-tabs">
            <?php foreach ($departments as $index => $dept) : ?>
                <button class="team-tab <?php echo $index === 0 ? 'active' : ''; ?>"
                    data-tab="dept-<?php echo esc_attr($dept->slug); ?>">
                    <?php echo esc_html($dept->name); ?>
                </button>
            <?php endforeach; ?>
        </div>

        <!-- Tab Contents -->
        <?php foreach ($departments as $index => $dept) : ?>
            <div class="team-tab-content <?php echo $index === 0 ? 'active' : ''; ?>"
                id="dept-<?php echo esc_attr($dept->slug); ?>">

                <?php
                $members = new WP_Query(array(
                    'post_type'      => 'team',
                    'posts_per_page' => -1,
                    'tax_query'      => array(
                        array(
                            'taxonomy' => 'team_department',
                            'field'    => 'slug',
                            'terms'    => $dept->slug,
                        ),
                    ),
                ));
                ?>

                <?php if ($members->have_posts()) : ?>
                    <div class="team-grid">
                        <?php while ($members->have_posts()) : $members->the_post(); ?>
                            <?php
                            $position   = get_post_meta(get_the_ID(), '_team_position', true);
                            $experience = get_post_meta(get_the_ID(), '_team_experience', true);
                            $address    = get_post_meta(get_the_ID(), '_team_address', true);
                            $phone      = get_post_meta(get_the_ID(), '_team_phone', true);
                            ?>
                            <div class="team-card">
                                <div class="avatar">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <?php the_post_thumbnail('thumbnail'); ?>
                                    <?php else : ?>
                                        👤
                                    <?php endif; ?>
                                </div>

                                <h3><?php the_title(); ?></h3>

                                <?php if ($position) : ?>
                                    <div class="position"><?php echo esc_html($position); ?></div>
                                <?php endif; ?>

                                <?php if ($experience) : ?>
                                    <div class="experience"><?php echo esc_html($experience); ?> years of experience</div>
                                <?php endif; ?>

                                <div class="contact-info">
                                    <?php if ($phone) : ?>
                                        <span>📞 <?php echo esc_html($phone); ?></span>
                                    <?php endif; ?>
                                    <?php if ($address) : ?>
                                        <span>📍 <?php echo esc_html($address); ?></span>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                    </div>
                <?php else : ?>
                    <p>No team members found in this department.</p>
                <?php endif; ?>

            </div>
        <?php endforeach; ?>

    <?php endif; ?>
</div>

<?php get_footer(); ?>