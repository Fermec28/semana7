/*
*   Reto de la noche anterior 
*/
changeColorRgb = function(r,g,b){
	$('*').css('background-color',`rgb(${r},${g},${b})`)
}

setInterval(function(){
    
	let r = Math.floor(Math.random()*255)
	let g = Math.floor(Math.random()*255)
	let b = Math.floor(Math.random()*255)
	changeColorRgb(r,g,b)
},3000)




/* 
    $('h1').html()
    $('h1').html('Jade')
    $('h1').html()
    $('h1').html('Jade Makeit Real')
    $('li').html('<bold> Full stack ROR </bold>')
    $('ul').append('hola makers')
    $('ul').append('<li>hola makers</li>')
    $('ul').prepend('<li>Listos para Programar ?</li>')
    $('ul').hide()
    $('ul').show()
   
    $().show()
    $().hide()
*/


/* 
    crear ul#familia
    una funcion que haga append en familia con los valores dados desde la consola
*/

/*
    Crear Familia -> integrantes -> []

              -------
                   agregarIntegrante ()  []<< new person(), agregar al ul
                   mostrarFamilia() -> Mostar en el DOM 
                   buscarNombre()-> mostrar solo el que tiene ese nombre 

    crear Persona -> nombre
                  -> apellido
                  -> edad
                  -> tipo  ( abuelo , hijo , tio)
*/
/*
Familia = function(name){
    this.name = name
    this.integrantes =[]
}

Familia.prototype.agregarIntegrante= function (nombre,apellido,rol){    
    this.integrantes.push(new Persona(nombre,apellido,rol))
}

Persona = function(nombre,apellido,rol){
    this.nombre = nombre
    this.apellido= apellido
    this.rol = rol
    this.agregarDOM();
}

Persona.prototype.agregarDOM= function(){
    $('#familia').append(`<li class = '${rol}'> Hola Soy ${this.nombre} ${this.apellido}, mi rol es ${this.rol}</li>`)
}

Familia.prototype.buscarRol() = function(rol){
    
}
*/