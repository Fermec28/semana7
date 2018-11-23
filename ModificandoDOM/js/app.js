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
    $().html
    $().append()
    $().preppend()
    $().show()
    $().hide()
*/