for (i = 0; i <= 5; i++) {

    function turnos(dia, horario, tratamiento, sucursal) {
        let nombre = prompt('Ingrese su nombre:');
        let apellido = prompt('Ingrese su apellido:');
        let edad = Number(prompt('Ingrese su edad:'));
        if (isNaN(edad)) {
            edad = Number(prompt('El valor ingresado no es correcto. Ingrese nuevamente su edad:'));
        }
        let dni = Number(prompt('Ingrese su numero de D.N.I:'));
        if (isNaN(dni)) {
            dni = Number(prompt('El valor ingresado no es correcto. Ingrese nuevamente su D.N.I:'));
        }
        let sexo = prompt('Ingrese su sexo:');

        const dias = dia;
        const hora = horario;
        const tratamientos = tratamiento;
        const sucursal1 = sucursal;


        

        alert('Estimado paciente ' + nombre + ' ' + apellido + ' el turno seleccionado para realizar el tratamiento ' + tratamientos + ' es el ' + dias + ' a las ' + hora + ' en la sucursal ubicada en ' + sucursal1);
    }

    turnos(dia(), horario(), tratamiento(), sucursal());


    function dia() {
        const dia1 = 'Miercoles 7/09/2022';
        const dia2 = 'Miercoles 14/09/2022';
        const dia3 = 'Miercoles 21/09/2022';
        const dia4 = 'Miercoles 28/09/2022';
        
        let dia = Number(prompt('Seleccione la opción correspondiente al día en que desea el turno' + '\n1) ' + dia1 + '\n2) ' + dia2 + '\n3) ' + dia3 + '\n4) ' + dia4));
        
        if (dia > 4) {
            dia = Number(prompt('La opcion selececcionada no es valida por favor seleccione nuevamente la opción correspondiente al día en que desea el turno' + '\n1) ' + dia1 + '\n2) ' + dia2 + '\n3) ' + dia3 + '\n4) ' + dia4));
        }

        switch (dia) {
            case 1:
                return dia = dia1;
            case 2:
                return dia = dia2;
            case 3:
                return dia = dia3;
            case 4:
                return dia = dia4;
            default:
                alert('La opción ingresada no es valida')
                return dia = 'No existe.'
        }      
    }

    function horario() {
        const hora1 = '17 h';
        const hora2 = '17:30 h';
        const hora3 = '18:00 h';
        const hora4 = '18:30 h';
        const hora5 = '19 h';
        let horario = Number(prompt('Seleccione la opción correspondiente al horario en que desea ser atendido' + '\n1) ' + hora1 + '\n2) ' + hora2 + '\n3) ' + hora3 + '\n4) ' + hora4 + '\n5) ' + hora5));

        if (horario > 5) {
            horario = Number(prompt('La opcion selececcionada no es valida por favor seleccione nuevamente la opción correspondiente al horario en que desea ser atendido' + '\n1) ' + hora1 + '\n2) ' + hora2 + '\n3) ' + hora3 + '\n4) ' + hora4 + '\n5) ' + hora5));
        }


        switch (horario) {
            case 1:
                return horario = hora1;
            case 2:
                return horario = hora2;
            case 3:
                return horario = hora3;
            case 4:
                return horario = hora4;
            case 5:
                return horario = hora5;
            default:
                alert('La opción ingresada no es valida')
                return horario = 'No existe.'

        }

    }

    function tratamiento () {
        const tratamiento1 = 'Adiposidad localizada';
        const tratamiento2 = 'Botox';
        const tratamiento3 = 'Manejo de cicatices';
        const tratamiento4 = 'Mesoterapia';
        const tratamiento5 = 'Microneedling';
        const tratamiento6 = 'Peeling';
        const tratamiento7 = 'Plasma rico en plaquetas';
        const tratamiento8 = 'Rellenos faciales';
        const tratamiento9 = 'Skin booster';
        const tratamiento10 = 'Consulta para evaluación';
        let tratamiento = Number(prompt('Seleccione la opción correspondiente al tratamiento que desea realizarse' + '\n1) ' + tratamiento1 + '\n2) ' + tratamiento2 + '\n3) ' + tratamiento3 + '\n4) ' + tratamiento4 + '\n5) ' + tratamiento5 + '\n6) ' + tratamiento6 + '\n7) ' + tratamiento7 + '\n8) ' + tratamiento8 + '\n9) ' + tratamiento9 + '\n10) ' + tratamiento10));



        if (tratamiento > 10) {
            tratamiento = Number(prompt('La opcion selececcionada no es valida por favor seleccione nuevamente la opción correspondiente al tratamiento que desea realizarse' + '\n1) ' + tratamiento1 + '\n2) ' + tratamiento2 + '\n3) ' + tratamiento3 + '\n4) ' + tratamiento4 + '\n5) ' + tratamiento5 + '\n6) ' + tratamiento6 + '\n7) ' + tratamiento7 + '\n8) ' + tratamiento8 + '\n9) ' + tratamiento9 + '\n10) ' + tratamiento10));
        }


        switch (tratamiento) {
            case 1:
                return tratamiento =  tratamiento1;
            case 2:
                return tratamiento =  tratamiento2;
            case 3:
                return tratamiento =  tratamiento3;
            case 4:
                return tratamiento =  tratamiento4;
            case 5:
                return tratamiento =  tratamiento5;
            case 6:
                return tratamiento =  tratamiento6;
            case 7:
                return tratamiento =  tratamient7;
            case 8:
                return tratamiento =  tratamiento8;
            case 9:
                return tratamiento =  tratamiento9;
            case 10:
                return tratamiento =  tratamiento10;
            default:
                alert('La opción ingresada no es valida')
                return tratamiento = 'No existe.'
        }

    }

    function sucursal() {
        const sucursal1 = 'Balvanera';
        const sucursal2 = 'Avellaneda';
        const sucursal3 = 'Lanus';
        let sucursal = Number(prompt('Seleccione la opción correspondiente a la sucursal donde desea ser atendido' + '\n1)' + sucursal1 + '\n2)' + sucursal2 + '\n3)' + sucursal3));



        if (sucursal > 3) {
            sucursal = Number(prompt('La opcion seleccionada no es valida por favor seleccione nuevamente la opción correspondiente a la sucursal donde desea ser atendido' + '\n1)' + sucursal1 + '\n2)' + sucursal2 + '\n3)' + sucursal3));
        }




        switch (sucursal) {
            case 1:
                return sucursal = sucursal1;
            case 2:
                return sucursal = sucursal2;
            case 3:
                return sucursal = sucursal2;
            default:
                alert('La opción ingresada no es valida')
                return sucursal = 'No existe.'
        }
    }
}