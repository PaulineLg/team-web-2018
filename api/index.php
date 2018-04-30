<?php


require_once 'Router.class.php';
$router = Router::getInstance();
//Définition du dossier contenant les controlleur
$router->setPath('controllers/');

// Si aucun controller n'est spécifié on appèlera accueilController et sa méthode index()
$router->setDefaultControllerAction('index','index');

// En cas d'url invalid on appèlera le controller errorController et sa méthode alert()
$router->setErrorControllerAction('error', 'alert');

// Routes
$router->addRule('u/login', array('controller' => 'user', 'action' => 'login'));
$router->addRule('/u/signup', array('controller' => 'user', 'action' => 'img'));
$router->addRule('/u/:userId', array('controller' => 'user', 'action' => 'add'));
$router->addRule('/u/:userId/goals', array('controller' => 'goals', 'action' => '[nom_de_la_fonction]'));
$router->addRule('/u/:userId/sales/month/:month', array('controller' => 'sales', 'action' => '[nom_de_la_fonction]'));
$router->addRule('/u/:userId/sales/plant/:plantId', array('controller' => 'sales', 'action' => '[nom_de_la_fonction]'));
$router->addRule('/u/:userId/sales/plant/nbr/:plantNbr', array('controller' => 'sales', 'action' => '[nom_de_la_fonction]'));
$router->addRule('/u/:userId/orders/current/:sort', array('controller' => 'order', 'action' => '[nom_de_la_fonction]'));
$router->addRule('/u/:userId/orders/old/:sort', array('controller' => 'order', 'action' => '[nom_de_la_fonction]'));

//test
$router->addRule('test/login', array('controller' => 'test', 'action' => 'login'));

?>
