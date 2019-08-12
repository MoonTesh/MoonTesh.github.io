<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'bh65048_les27' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'bh65048_admin' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'Tesh16447' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')jSp}c`/VxOP?^Sg0zp2_4 |D#ny6nDeRuj6!Az=!0Nq1]x`imWH)16|h$cM:hr6' );
define( 'SECURE_AUTH_KEY',  'XHBBmG::EY(%QiBY4kj$I8OB6o2 #1M3eRaj(Wh:E`NSs^kl@&_+6n+EK]ADA<E;' );
define( 'LOGGED_IN_KEY',    'yZ.8j0%y92M<BV`2z.D@IGvCSa7pe898]vq?<mi*lttK#7W11G2=*i=o1>*V&m)S' );
define( 'NONCE_KEY',        'N,_7:*JXW4&2VD=)HP#V)bh#]EMSg=#:U.KX]@8ula3e2EgJMkK78gY?<+sIo cV' );
define( 'AUTH_SALT',        'n=Knuec0UrOUE1x}:x(0;TZh_F%1eQY~og{)5;F)s.F##_!jemjvxO{zD0,v?9[T' );
define( 'SECURE_AUTH_SALT', 'F>I6lDF}Ce%=HsRv7H E,iQHkRWfT9Q}$>Kk=<H^2C[DeyauNk6l1e~iYu,l!z!>' );
define( 'LOGGED_IN_SALT',   'V/w0Eck[|04AG$;Uji!:ye:AzOu*f2;n|1]a(6F>`ZxU%@WcZL%1lkRl%Dp[Yw>W' );
define( 'NONCE_SALT',       '-0B#:S`)ipf]F*f[ThqE^<u40`W_-<M5mw<*`98w@j|%OL-Lw*Td4*~+}1rEo#x]' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
