let formulario = document.forms.form;
let inputPedido = document.getElementById("total");
let comboPrecio = 0;
let productosPrecio = 0;

const pedido = {

    //Propiedades/atributos
    precioCombo: comboPrecio,
    precioProductos: productosPrecio,


    //Metodos
    roundNumber: function (num) {
        return Number.parseFloat(num).toFixed(2);
    },

    calcSubtotal: function () {
        if (document.getElementById("combo-1").checked){
            pedido.precioCombo = parseFloat(formulario.superCombo.value);
            formulario.total.value = pedido.roundNumber(pedido.precioCombo);
        } else if (document.getElementById("combo-2").checked){
            pedido.precioCombo = parseFloat(formulario.superCombo.value);
            formulario.total.value = pedido.roundNumber(pedido.precioCombo);
        } else if (document.getElementById("combo-3").checked){
            pedido.precioCombo = parseFloat(formulario.superCombo.value);
            formulario.total.value = pedido.roundNumber(pedido.precioCombo);
        } else {
            pedido.precioCombo = 0;
            formulario.total.value = pedido.roundNumber(pedido.precioCombo);
        }

    },

    calcTotal: function () {

    },

    ingresarComentario: function() {

    }
}


var combo1 = document.getElementById("combo-1").addEventListener("change", pedido.calcSubtotal);
var combo2 = document.getElementById("combo-2").addEventListener("change", pedido.calcSubtotal);
var combo3 = document.getElementById("combo-3").addEventListener("change", pedido.calcSubtotal);






