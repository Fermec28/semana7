/**
 * El reto consiste en crear una pagina dinamica que me permita crear
 * un maker desde la consola del navegador, de forma que al introducir
 * new Maker(nombre,apellido,edad,lenguaje) se agrege a la pagina
 * 
 * crear una funcion que me permite resaltar los maker con el lenguaje
 * igual
 * 
 * crear una funcion que como resultado me muestre solamente los makers con 
 * el mismo lenguaje al paramentro pasado 
 */


Maker= function(firstName,lastName,age,language){
    this.firstName= firstName
    this.lastName= lastName
    this.age = age
    this.language = language
    /*  ¿Por que ejecutamos add2DOM?
       Queremos que al crear el usuario se agregue al DOM tan pronto
       lo creamos, asi que es tarea del constructor ejecutar la funcion
    */
    this.add2DOM()
}

Maker.prototype.add2DOM = function(){
    /* 
        $('ul#makers') => seleccionamos dentro del dom todo ul con id= makers
        .append() => nos permite agregar contenido al DOM
        
    */

  $('ul#makers').append(`<li class= ${this.language}>
        Hola soy ${this.firstName} ${this.lastName}, tengo ${this.age} años y mi
        lenguaje de programacion favorito es ${this.language}    
     </li>`)

}

Maker.prototype.searchByLanguge= function(language){
    $('li').hide()
    $(`li.${language}`).show()
}

Maker.prototype.showFriends = function(language){
    $('li').show() //nos aseguramos que esten todos listados
    $('li').css('background-color','white') //volvemos todos en blanco para que solo resalte los deseados
    $(`li.${language}`).css('background-color','red')
}




let angie = new Maker('angie','vanegas',29,'ruby')
let leo = new Maker('leo','omaña',26,'js')
let ferney = new Maker('ferney','medina',23,'js')
let joshua = new Maker('josha','prpich',28,'ruby')



/* Para jugar en consola */
//leo.searchByLanguge('js')
//leo.searchByLanguge('ruby')
//leo.showFriends('ruby')
//leo.showFriends('js')