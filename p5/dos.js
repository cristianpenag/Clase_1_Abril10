var Paises = [
  "Perú",
  "Venezuela",
  "Uruguay",
  "Chile",
  "Ecuador",
  "Argentina",
  "Panamá",
  "Paraguay",
  "Brasil",
]

var litrospercapita = [8.1,8.9,7.6,9.6,7.2,9.3,8,8.8,8.7]

Paises.push("El Salvador");
litrospercapita.push(3.2);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('quesucederealmente');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(0,0,53);
  for(var x = 0; x <= Paises.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(204,0,0);
    // el tamaño del texto es igual a la cantidad de oscars ganados * 3
    textSize((litrospercapita[x]*5));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas

    rect(((width/(Paises.length+1))*(x+1)), 280,50,(litrospercapita[x]*-15));

    text(litrospercapita[x], ((width/(Paises.length+1))*(x+1)), (height/2+120));
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(18);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(Paises[x], ((width/(Paises.length+1))*(x+1)), ((height/2)+135),((windowWidth/(Paises.length+1))-50),100);


  }
}
