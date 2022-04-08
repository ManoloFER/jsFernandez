// Precios de planchas. Valores constantes
const float4 = 1000
const float5 = 1200
const float6 = 1500
const float8 = 1800
const float10 = 2200
const lam3 = 2000
const lam4 = 3000
const lam5 = 4000
const cam12 = 500

// Dato del cliente
// var alto = prompt("Ingrese el alto en metros")
// var ancho = prompt("Ingrese el ancho en metros")
// var cantidad = prompt("Ingrese la cantidad")

// Calculos y transformaciones
alto = parseFloat(alto)
ancho = parseFloat(ancho)
cantidad = parseInt(cantidad)
let perimetro = ((alto + ancho) * 2)
let area = (alto * ancho)

// Resultados
var composicion
var precio

// constructor
function Dvh(alto, ancho, cantidad) {
    this.alto = prompt("Ingrese el alto en metros")
    this.ancho = prompt("Ingrese el ancho en metros")
    this.cantidad = prompt("Ingrese la cantidad")
    this.armado = function() {console.log(composicion)}
    this.cotizacion = function() {console.log(precio)}
}

const dvh = new Dvh {}

// Alternativas segun metros2

if (area <= 1.5) {
    composicion = ("Float 4 + Camara 12 + Float 4")
    precio = (((float4 + float4) * area) + (cam12 * perimetro)) * cantidad
}

if ((area > 1.5) && (area <= 2.5)) {
    composicion = ("Float 4 + Camara 12 + Laminado 3+3")
    precio = (((float4 + lam3) * area) + (cam12 * perimetro)) * cantidad
}

if ((area > 2.5) && (area <= 3.5)) {
    composicion = ("Float 5 + Camara 12 + Laminado 3+3")
    precio = (((float5 + lam3) * area) + (cam12 * perimetro)) * cantidad
}

if ((area > 3.5) && (area <= 4.5)) {
    composicion = ("Float 6 + Camara 12 + Laminado 3+3")
    precio = (((float6 + lam3) * area) + (cam12 * perimetro)) * cantidad
}

if ((area > 4.5) && (area <= 6)) {
    composicion = ("Float 8 + Camara 12 + Laminado 4+4")
    precio = (((float8 + lam4) * area) + (cam12 * perimetro)) * cantidad
}

if ((area > 6) && (area <=9)) {
    composicion = ("Float 10 + Camara 12 + Laminado 5+5")
    precio = (((float10 + lam5) * area) + (cam12 * perimetro)) * cantidad
}

alert("Para " + area + "m2 la conformacion debe ser " + composicion + " y el valor es de $" + 
    precio + " por " + cantidad + " unidades.")