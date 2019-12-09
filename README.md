# NPM 
Proyecto NPM
Es un archivo directorio lo manifestamos en package.json es muy importante para el proyecto npm
Descripcion del Proyecto de los requisitos
Debes de realizar todos los pasos haciendo uso únicamente de la línea de comandos.
Debes de configurar tu repositorio para que ignore los siguientes ficheros y directorios
Directorio donde se instalen las dependencias de NPM
Debes de poder ejecutar la librería moment js y hacer un pequeño ejemplo mediante la metodología que proporciona NPM.

Requisitos que necesitamos 
Instalar NPM, NODE JS y la libreria MOMENT
Una vez aceptado todas las peticiones de instalcion de NPM y NODE

Abrimos el comando de NODE Prompt en mi caso  para saber si lo tenia instalado realizado npm -v y node -v ya actualizado
Primero creamos un reposititor con la licencia MIT luego clonamos el git para tenerlo y realizar el inicio de npm
luego iniciamos npm init colocando su nombre descripcion los demas 
"name": "proyectonpm",
    "version": "1.0.0",
    "description": "proyecto NPM",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/robertfox11/proyectoNPM.git"
    },
    "author": "Robert Salazar Arias <11rsahome@gmail.com>",
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/robertfox11/proyectoNPM/issues"
    },
    "homepage": "https://github.com/robertfox11/proyectoNPM#readme"
   
Hacemos un commit para guardar lo que creamos 

Luego realizamos instalacion de la dependencia solicitada en este caso MOMENT 
Se creara un node module en la cual en .gitignore agregamos el node_module para que no lo importe en el git 
realizamos un funcion reloj metido en module.exports para luego creamos una carpeta test y llamar el metodo con require
y meterlo en una constante y llamar luego el metodo
el metodo realizado para la funcion en module.export es el siguiente 
module.exports = {

    reloj: function() {
        setInterval(() => {

            var moment = require('moment');
            var reload = moment().format('MMMM Do YYYY, h:mm:ss a');
            // var reloj = document.getElementById('reloj');
            // reloj.innerHTML = reload
            console.log(reload);
        }, 1000);
    }
}
Aqui llamamos a la funcion que tiene module.exports
const time = require('./../index')
    //llamamos a la funcion creada en index.js
time.reloj(); 
nos dirigimos en la console nos situamos en codigo donde esta puesto llamando a la funcion donde queremos que se ejecute 
y escribimos en cd test y ejecutamos la funcion node index.js


