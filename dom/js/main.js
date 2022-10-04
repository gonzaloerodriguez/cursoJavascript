
//Creo los array que se van a recorrer en los cada select.
const tratamientosDisponibles = ['Adiposidad localizada', 'Botox', 'Manejo de cicatices', 'Mesoterapia', 'Microneedling', 'Peeling', 'Plasma rico en plaquetas', 'Rellenos faciales', 'Skin booster', 'Consulta para evaluación'];
const sucursales = ['Balvanera', 'Avellaneda', 'Lanus']; 

// OR para que el forEach cargue los dias que estan en el storage y si no hay ninguno cargue el array original 
let diasDisponibles = JSON.parse(localStorage.getItem("DIARESERVADO")) || ['Miercoles 7/09/2022', 'Miercoles 14/09/2022', 'Miercoles 21/09/2022', 'Miercoles 28/09/2022'];
let horasDisponibles = JSON.parse(localStorage.getItem("HORARESERVADA")) || ['17 h', '17:30 h', '18:00 h', '18:30 h', '19 h'];



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

//lo dejo comentado solo para que veas donde aplique el OPERADOR TERNARIO reemplazando el if else 
  this.value === 'default' ? sucursalSelect.setAttribute('disabled', '') : sucursalSelect.removeAttribute('disabled', '');
/*   if(this.value === 'default') {
    sucursalSelect.setAttribute('disabled', '');
    return;
  }else {
    sucursalSelect.removeAttribute('disabled', '');
    return;
  } */

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
  
  this.value === 'default' ? diaSelect.setAttribute('disabled', '') : diaSelect.removeAttribute('disabled', '');

}

 
//manejador del evento change.

sucursalSelect.addEventListener('change', sucursalChange);


//TAMBIEN DEJO ESTO COMENTADO A VER DE QUE MANERA DESPUES VOY A IMPLEMENTAR TANTO EL CHANGE COMO EL FILTRADO POR EL MOMENTO LO COMENTO PORQUE SI NO EL forEach ME CARGA DOS VECES LOS DIAS Y LAS HORAS 
//cargo el select correspondiente a los dias disponibles.
/* diasDisponibles.forEach(dia => {
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
horaSelect.addEventListener('change', horaChange); */



// creo una constante para traer el formulario del html.
const form = document.getElementById('formulario');


console.log(form);  


// Funcion para renderizar los numeros dentro del select 
function renderizarDia() {
  // Creamos un select 
  const selectDia = document.getElementById("dia"); 


  // Esto es como lo que habias realizado 
  diasDisponibles.forEach((dia) => {
      const option = document.createElement("option");
      option.value = dia;
      option.text = dia;
      selectDia.appendChild(option);
  });
} 


// Funcion para renderizar los numeros dentro del select 
function renderizarHora() {
  // Llamo al select correspondiente
  const selectHora = document.getElementById("hora"); 


  
  horasDisponibles.forEach((hora) => {
      const option = document.createElement("option");
      option.value = hora;
      option.text = hora;
      selectHora.appendChild(option);
  });
} 







// Funcion para filtrar los numeros y modificar el array de numeros 
const filtrarDia = () => { 
  // Selecciono el numero que tiene el select 
  const diaSeleccionado = document.getElementById("dia").value; 
  // Filtro el array de numeros añadiendo todos los numeros que sean diferentes del seleccionado 
  diasDisponibles = diasDisponibles.filter((dia => dia != diaSeleccionado)); 
  localStorage.setItem("DIARESERVADO", JSON.stringify(diasDisponibles)); 
  }; 
  

// Funcion para filtrar los numeros y modificar el array de numeros 
const filtrarHora = () => { 
  // Selecciono el numero que tiene el select 
  const horaSeleccionado = document.getElementById("hora").value; 
  // Filtro el array de numeros añadiendo todos los numeros que sean diferentes del seleccionado 
  horasDisponibles = horasDisponibles.filter((hora) => hora != horaSeleccionado); 
  localStorage.setItem("HORARESERVADA", JSON.stringify(horasDisponibles)); 
  }; 
  



//creo el evento submit para que cuando el usuario accione el boton con el type submit se obtengan los valores ingresados en cada campo se guarden en un objeto y se filtren los dias y horas disponibles y finalmente resetea el formulario.

form.addEventListener('submit', (e) => {  
    e.preventDefault();
  
  //creo las constantes que van a contener los datos personales ingresados por el usuario.
    const name = document.getElementById('nombre').value;
    const lastname = document.getElementById('apellido').value;
    const identificationNumber = document.getElementById('dni').value;
    const telephonNumber = document.getElementById('telefono').value;
    const correo = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;
    
  //armo el objeto con los datos ingresados en el formulario.
    const datos = {
        nombre: name, 
        apellido: lastname,
        dni : identificationNumber,
        telefono: telephonNumber,
        email: correo ,
        sexo,
        tratamiento: tratamientoSelect,
        sucursal: sucursalSelect,
        dia: diaSelect.value,
        hora: horaSelect.value 
       }


  //los muestro en consola.     
    console.log(datos);




    const selectDia = document.getElementById("dia"); 
    const selectHora = document.getElementById("hora"); 


    filtrarDia();
    selectDia.remove;
    renderizarDia();
    filtrarHora();
    selectHora.remove;
    renderizarHora();
    








  //DESESTRUCTURACION de datos voy a utilizar esa variable para mostrarla en el sweet alert  

  let {nombre, dia, hora, sucursal} = datos;




  // SPREAD OPERATOR para guardar en un array todos los dias donde hay turnos reservados

  const turnosRersevados = [...datos.dia];

  console.log(turnosRersevados);
  
   //guardando los valores en localStorage
     
   localStorage.setItem('datosDeReserva', JSON.stringify(datos));
   
   const datosDeReserva = JSON.parse(localStorage.getItem('datosDeReserva'));

   console.log(datosDeReserva);


  //SWEET ALERT


   swal({
    title: `${nombre} tu reserva fue realizada`,
    text: `Deberás concurrir el ${dia} a las ${hora} en sucursal ${sucursal}`,
    icon: "success",
    closeOnClickOutside: true,
    closeOnEsc: true,
    timer: 4000,
  });
    


   
    form.reset();   
    


  });
   
  
 renderizarDia(diasDisponibles);
 renderizarHora(horasDisponibles);




