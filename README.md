# FileNode

## Install 

$ npm install

## Resume

Aplicacion hecha con YARGS de linea de comandos para imprimir en consola una tabla de multiplicar dada una base y un limite.

y crear un archivo con la tabla tabla de multiplicar dada una base y un limite




### Ejemplos:

#### Listar

-Listar tiene requerido el flag --base pero el --limite es opcional y con valor de 10 por default.

$ node app listar --limite=11 --base=3

![Comando listar](/listar-ejemplo.JPG)


#### Crear

-Crear tiene requerido el flag --base pero el --limite es opcional y con valor de 10 por default.

-Devuelve una promesa con el nombre del archivo si es exitoso

$ node app crear --limite=21 --base=2

![Comando crear](/crear-ejemplo.JPG)
