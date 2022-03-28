let obtenerDatos = () => {
    let precioOriginal = parseFloat(document.querySelector('#precioOriginal').value)
    let descuento = parseFloat(document.querySelector('#descuento').value)
    let resultado = document.querySelector('#resultado')

    if (precioOriginal > 0 && descuento > 0) {
        let precioConDescuento = calcularDescuento(precioOriginal, descuento)

        resultado.value = `El precio del producto con el descuento del ${descuento}% es de $${precioConDescuento}`
    } else {
        alert('Debe ingresar números')
    }
}

let calcularDescuento = (precioOriginal, descuento) => {
    let porcentajePrecioConDescuento = 100 - descuento
    let precioConDescuento = parseFloat(precioOriginal) * (porcentajePrecioConDescuento / 100)

    return precioConDescuento
}