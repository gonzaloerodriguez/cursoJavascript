
//Creo los array que se van a recorrer en los cada select.
const TRATAMIENTOSDISPONIBLES = ['Adiposidad localizada', 'Botox', 'Manejo de cicatices', 'Mesoterapia', 'Microneedling', 'Peeling', 'Plasma rico en plaquetas', 'Rellenos faciales', 'Skin booster', 'Consulta para evaluación'];
const SUCURSALES = ['Balvanera', 'Avellaneda', 'Lanus'];
let turnosDisponibles = JSON.parse(localStorage.getItem("TURNOSRESERVADOS")) || ['Seleccionar turno', 'Miercoles 7/09/2022 17 h', 'Miercoles 7/09/2022 17:30 h', 'Miercoles 7/09/2022 18 h', 'Miercoles 7/09/2022 18:30 h', 'Miercoles 7/09/2022 19 h', 'Miercoles 14/09/2022 17 h', 'Miercoles 14/09/2022 17:30 h', 'Miercoles 14/09/2022 18 h', 'Miercoles 14/09/2022 18:30 h', 'Miercoles 14/09/2022 19 h', 'Miercoles 21/09/2022 17 h',  'Miercoles 21/09/2022 17:30 h', 'Miercoles 21/09/2022 18 h', 'Miercoles 21/09/2022 18:30 h', 'Miercoles 21/09/2022 19 h', 'Miercoles 28/09/2022 17 h', 'Miercoles 28/09/2022 17:30 h', 'Miercoles 28/09/2022 18 h', 'Miercoles 28/09/2022 18:30 h', 'Miercoles 28/09/2022 19 h'];
let tratamientoSelect = document.getElementById('tratamiento');
let sucursalSelect = document.getElementById('sucursal');
let select = document.getElementById('turno');
const SELECT = document.getElementById('turno');
const SELECTCONTAINER = document.getElementById('selectContainer');
let reservas = JSON.parse(localStorage.getItem('datosDeReserva')) ||  []  ;
const form = document.getElementById('formulario');





console.log(form);  


//cargo las opciones al select de tratamientos recorriendo el array correspondiente con un forEach.
TRATAMIENTOSDISPONIBLES.forEach(tratamientos => {
  let option = document.createElement('option');
  option.text = tratamientos;
  option.value = tratamientos;
  tratamientoSelect.appendChild(option);
});

//funcion para el evento change con el cual habilito/deshabilito los select siguientes al de tratamientos habilitando solo el que le sigue una vez que seleccione una opcion != default.
const tratamientoChange = function(event) {
  tratamientoSelect = this.value;
  SELECT.setAttribute('disabled', '');
  this.value === 'default' ? sucursalSelect.setAttribute('disabled', '') : sucursalSelect.removeAttribute('disabled', '');

}

//cargo las opciones al select de sucursales recorriendo el array correspondiente con un forEach.

SUCURSALES.forEach(sucursal => {
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
  
  this.value === 'default' ? SELECT.setAttribute('disabled', '') : SELECT.removeAttribute('disabled', '');

}
 
//manejador del evento change.

sucursalSelect.addEventListener('change', sucursalChange);


// creo una constante para traer el formulario del html.



// Funcion para renderizar los numeros dentro del select 
function renderizarTurno() {
  
  turnosDisponibles.forEach((dia) => {
      const option = document.createElement("option");
      option.value = dia;
      option.text = dia;
      SELECT.appendChild(option);
  });
} 


// Funcion para filtrar los numeros y modificar el array de numeros 
const filtrarTurno = () => { 
  // Selecciono el numero que tiene el select 
  const TURNOSELECCIONADO = document.getElementById("turno").value; 
  // Filtro el array de numeros añadiendo todos los numeros que sean diferentes del seleccionado 
  turnosDisponibles = turnosDisponibles.filter((dia => dia != TURNOSELECCIONADO)); 
  localStorage.setItem("TURNOSRESERVADOS", JSON.stringify(turnosDisponibles)); 
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
    const $loader = document.querySelector('.contact-form-loader');
    const $response = document.querySelector('.contact-form-response');
    const SELECT = document.getElementById("turno"); 
   
   
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
        turno: select.value
       }


  //los muestro en consola.     
    console.log(datos);


    filtrarTurno();
    SELECT.remove;
    renderizarTurno();
    
  //DESESTRUCTURACION de datos para mostrarla en el sweet alert  

  let {nombre, turno, sucursal} = datos;


  reservas.push(datos);

  localStorage.setItem('datosDeReserva', JSON.stringify(reservas));

  console.log(reservas);

  $loader.classList.remove("none");


  //Fetch para el envio de mails con la informacion del formulario (yo puse mi mail pero para hacer la prueba)
  fetch("https://formsubmit.co/ajax/gonzalo-ezequiel@hotmail.com",{
    method: "POST",
    body: new FormData(e.target),
  })
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => {
     $loader.classList.add("none"); 
    swal({
      title: `${nombre} tu reserva fue realizada`,
      text: `Deberás concurrir el ${turno} en sucursal ${sucursal}`,
      icon: "success",
      closeOnClickOutside: true,
      closeOnEsc: true,
      timer: 6000,
    });
     form.reset();   
  })
  .catch (err => {
    console.log(err);
    let message = err.statusText || "Ocurrio un error al reservar el turno intenta nuevamente"
    $response.innerHTML = `<p>Error: ${err.status}: ${message}</p>`;
  })
  .finally(() => setTimeout(() => {
    $response.classList.add("none");
    $response.innerHTML = "";
  },3000)); 


  });
 
   
 renderizarTurno(turnosDisponibles);




