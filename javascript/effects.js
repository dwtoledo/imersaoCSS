var i = 0
var txt = 'Douglas Toledo'
var speed = 200
var el = document.getElementById ( "typewriter-effect" );

function init ( ) {
  i = 0
  el.innerHTML = ''
  typeWriter ( )
}

function typeWriter ( ) {
  if ( i < txt.length ) {
    el.innerHTML += txt.charAt ( i );
    i++;
    setTimeout ( typeWriter, speed );
  }
}

init ( );
setInterval (init, 15000);