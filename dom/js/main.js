
//Creo los array que se van a recorrer en los cada select.
const tratamientosDisponibles = ['Adiposidad localizada', 'Botox', 'Manejo de cicatices', 'Mesoterapia', 'Microneedling', 'Peeling', 'Plasma rico en plaquetas', 'Rellenos faciales', 'Skin booster', 'Consulta para evaluación'];
const sucursales = ['Balvanera', 'Avellaneda', 'Lanus']; 
let diasDisponibles = ['Miercoles 7/09/2022', 'Miercoles 14/09/2022', 'Miercoles 21/09/2022', 'Miercoles 28/09/2022'];
let horasDisponibles = ['17 h', '17:30 h', '18:00 h', '18:30 h', '19 h'];



//creo las variables que van a corresponder a los select.
let tratamientoSelect = document.getElementById('tratamiento');
let sucursalSelect = document.getElementById('sucursal');
let diaSelect = document.getElementById('dia');
let horaSelect = document.getElementById('hora');
let option = document.createElement('option');



//cargo las opciones al select de tratamientos recorriendo el array correspondiente con un forEach.
tratamientosDisponibles.forEach(tratamientos => {
  let option = document.createElement('option');
  option.text = tratamientos;
  option.value = tratamientos;
  tratamientoSelect.appendChild(option);
});

//funcion para el evento change con el cual habilito/deshabilito los select siguientes al de tratamientos habilitando solo el que le sigue una vez que seleccione una opcion != default.
const tratamientoChange = function(event) {
  tratamientoSelect = this.value;
  
  diaSelect.setAttribute('disabled', '');
  horaSelect.setAttribute('disabled', '');
  if(this.value === 'default') {
    sucursalSelect.setAttribute('disabled', '');
    return;
  }else {
    sucursalSelect.removeAttribute('disabled', '');
    return;
  }

}

//cargo las opciones al select de sucursales recorriendo el array correspondiente con un forEach.

sucursales.forEach(sucursal => {
  let option = document.createElement('option');
  option.text = sucursal;
  option.value = sucursal;
  
  sucursalSelect.appendChild(option);
});
  

//manejador del evento change.
tratamientoSelect.addEventListener('change', tratamientoChange);



//funcion para el evento change.

const sucursalChange = function(event) {
  sucursalSelect = this.value;
  
  horaSelect.setAttribute('disabled', '');
  if(this.value === 'default') {
    diaSelect.setAttribute('disabled', '');
    return;
  }else {
    diaSelect.removeAttribute('disabled', '');
    return;
  }

}

 
//manejador del evento change.

sucursalSelect.addEventListener('change', sucursalChange);



//cargo el select correspondiente a los dias disponibles.
diasDisponibles.forEach(dia => {
  let option = document.createElement('option');
  option.text = dia;
  option.value = dia;
  
  diaSelect.appendChild(option);
});


// funcion para el evento change.
const diaChange = function(event) {
  diaSelect = this.value;
  
  if(this.value === 'default') {
    horaSelect.setAttribute('disabled', '');
    return;
  }
  else {
    horaSelect.removeAttribute('disabled', '');
    return;
  }

}

//manejador del evento change.

diaSelect.addEventListener('change', diaChange);


// cargo las opciones al select de horas.
horasDisponibles.forEach(hora => {
  let option = document.createElement('option');
  option.text = hora;
  option.value = hora;
  
  horaSelect.appendChild(option);
});


//funcion para el evento change.
const horaChange = function(event) {
  horaSelect = this.value;
    
}

//manejador del evento change.
horaSelect.addEventListener('change', horaChange);



// creo una constante para traer el formulario del html.
const form = document.getElementById('formulario');


console.log(form);  



//creo el evento submit para que cuando el usuario accione el boton con el type submit se obtengan los valores ingresados en cada campo se guarden en un objeto y se filtren los dias y horas disponibles y finalmente resetea el formulario.

form.addEventListener('submit', (e) => {  
    e.preventDefault();
  
  //creo las constantes que van a contener los datos personales ingresados por el usuario.
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;
    
  //armo el objeto con los datos ingresados en el formulario.
    const datos = {
        nombre, 
        apellido,
        dni,
        telefono,
        email,
        sexo,
        tratamiento: tratamientoSelect,
        sucursal: sucursalSelect,
        dia: diaSelect,
        hora: horaSelect 
       }


  //los muestro en consola.     
    console.log(datos);

  
   //guardando los valores en localStorage
     
   localStorage.setItem('datosDeReserva', JSON.stringify(datos));
   
  //traigo el elemento guardado
  
   const datosDeReserva = JSON.parse(localStorage.getItem('datosDeReserva'));

  //lo muestro en consola
  
   console.log(datosDeReserva);





   
    form.reset();   
    


  });
   
  










