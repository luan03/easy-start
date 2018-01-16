<?php

require_once './vendor/autoload.php';

//load templates
$loader = new Twig_Loader_Filesystem('views');

//set cache directory
$twig = new Twig_Environment($loader, array(
    'cache' => false,
    'debug' => true,
    'auto_reload' => true,
));

/**
 * Home page
 */
require_once './src/Controller/home.php';
