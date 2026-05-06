<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '{+r*ye6{+h(kEXgba?BN[@1)zYwQ72(-g~G<r[fkH<NT?/VEd}Q_#!@,|5FW]VH,' );
define( 'SECURE_AUTH_KEY',   'Ds<Yh;4S=&)gbbXTOm;1Colh- uQzaY[nq1]nh_d@eyert%RYfzkfUQ|^T?VEbV,' );
define( 'LOGGED_IN_KEY',     'i1Vjy4rG#&uh>YM05PfG+FL?xSW8I-yJA]B/jMc,b(IDVq;Dt&s,,iLBxqr=Hf4`' );
define( 'NONCE_KEY',         '+<b#s, a/))-~>+smMJ4n@`VLd+YL}x#5wlju4)q)I4+5%d@lpL0nFyBatH4k31G' );
define( 'AUTH_SALT',         'Gy@vp&[j(Ha{6mMz`VntGH30.%]hUO37Ehma]/ %OZ75>>jza$bd2;A7N+`wQUev' );
define( 'SECURE_AUTH_SALT',  'AVV^54G5D&lOM^iR{Bo(X7M4+ID2 #?gbO/bfv(v*NJG&=D>~qxxg7xeG7`KR|Xr' );
define( 'LOGGED_IN_SALT',    'r0HyH)SswW*%Xh>bq:yz([]EY4[;q[W#W+7FrK+^Gem89cL`=D-1(z+Nz0ZCS~~S' );
define( 'NONCE_SALT',        'o#@9i~G7|r]{}+!0`$YCg9lhcVmk7hB,(%TU~shHw-Y*YE3aco]%pyAt,ahp<pcn' );
define( 'WP_CACHE_KEY_SALT', '~)3djG56Y,9lq[|d~}r:x&h@RsppGzqceBx.HZ$|TEk=.er{==GOG2_s#$M+bL<r' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
