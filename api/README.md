# Comment ça marche ici

On utilise un système de routage qui permet, pour une addresse donnée, d'accéder directement à la fonction qu'on veut dans le ficher qu'on veut.
Par exemple :
```php
$router->addRule('u/login', array('controller' => 'user', 'action' => 'login'));
```
Cette ligne spécifie que si en front, on effectue une requête à l'adresse 'u/login', nous allons chercher la fonction login dans le fichier userController.php
