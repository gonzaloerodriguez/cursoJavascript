let welcome = document.createElement('h1');

let client = prompt('Ingrese su nombre')

welcome.innerText = `Hola ${client} selecciona el turno que deseas reservar aquí abajo`;


document.body.appendChild(welcome);



let selectTratamientos = document.getElementById('formTratamientos');



selectTratamientos.innerHTML = `<select>
                                <option selected>Tratamientos</option>
                                <option value="1">Adiposidad localizada</option>
                                <option value="2">Botox</option>
                                <option value="3">Microneedling</option>
                                <option value="4">Manejo de cicatrices</option>
                                <option value="5">Mesoterapia capilar</option>
                                <option value="6">Mesoterapia corporal</option>
                                <option value="7">Mesoterapia facial</option>
                                <option value="8">Peeling</option>
                                <option value="9">Plasma rico en plaquetas</option>
                                <option value="10">Rellenos faciales</option>
                                <option value="11">Skin booster</option>
                                <option value="12">Otro</option> </select>`;



document.body.appendChild(selectTratamientos);

let diasDisponibles = document.createElement('div');


diasDisponibles.innerHTML =`<select>
                            <option selected>Dias disponibles</option>
                            <option value="1">Miercoles 7/09/2022</option>
                            <option value="2">Miercoles 14/09/2022</option>
                            <option value="3">Miercoles 21/09/2022</option>
                            <option value="4">Miercoles 28/09/2022</option></select> `;

document.body.appendChild(diasDisponibles);


let horaDisponible = document.createElement('div');


horaDisponible.innerHTML =`<select>
                            <option selected>Hora disponible</option>
                            <option value="1">17:00 hs</option>
                            <option value="2">17:30 hs</option>
                            <option value="3">18:00 hs</option>
                            <option value="4">18:30 hs</option></select> `;

document.body.appendChild(horaDisponible);



let containerButtonReserve = document.createElement('div');

containerButtonReserve.innerHTML = `<button>Reservar</button>`;

document.body.appendChild(containerButtonReserve);
