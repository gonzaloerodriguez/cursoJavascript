let nombre = prompt('Ingrese su nombre');
let nuevoRegistro = 'Nombre de usario';

while (nombre != "ESC") {
    switch (nombre) {
        case 'Juan':
            alert('Hola Juan');
            break;
        case 'Pedro':
            alert('Hola Pedro');
            break;
        default:
            alert('El nombre ' + nombre + ' no esta registrado. Por favor ingrese su nombre nuevamente para que sea registrado');
    }
    nombre = prompt('Ingrese su nombre');
    nuevoRegistro = alert('Bienvenido a nuestra comunidad ' + nombre);
    break;
}
