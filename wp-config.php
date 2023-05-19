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
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'portafolio' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'R;!kS0I >#?c5wwd*n->3#j*#U!T2Y<87V=O%10C!m,8gE,^5x6y/%t0~HN*.f,!' );
define( 'SECURE_AUTH_KEY',  'Bzjac>8Z7x-{9wh_[$KCJ*r2{Uw|-GyzIU>}U t?:U{VVPGs3pUXG ,4D!`/r8F|' );
define( 'LOGGED_IN_KEY',    '$<neY2Y.=vIG6GW[!0$;;{B?;87W|jQ(CPb;@BndReBP3[yYqqKT%,4|6;gpoNhZ' );
define( 'NONCE_KEY',        '4X8xnB_lB[z50w1%F5)Us4,$b/?Kb7uCdM3G[ D/ZchLjV-x0;v.OOrv.-s`7)%:' );
define( 'AUTH_SALT',        'Uy5vY;YmRLD0Gf[Fw5.!yjpmmoJ!-%(v2`q[E<sHLD_ygjs@te2lA^l+RQuzZW[:' );
define( 'SECURE_AUTH_SALT', '1F@L:]~#ox8`K/bM8Zr(fK$R^zwBc U( 8vb~;%wFpc,ncb6.9tNL3yUYfp[u-c)' );
define( 'LOGGED_IN_SALT',   '[P@m;_R*;{+LCT=g)3,bJlP>OE_-PFS9:b[SW~9}k,$y3Z-?ZB}OBv_=zRH|H>xu' );
define( 'NONCE_SALT',       'oWj~u&Gc/zLt*DTR^!#J~/@-8k12lzWYE)p$&9Lm<MDtE]mXpiVlXk*B8|yLu9fA' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
