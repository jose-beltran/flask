const selectPlantilla = document.getElementById('selectPlantilla');
const textPlantilla = document.getElementById('textPlantilla');
const selectPlantilla2 = document.getElementById('selectPlantilla2');
const codigoPlantilla = document.getElementById('codigoPlantilla');

function cambiarPlantilla() {
    switch (selectPlantilla.value) {
        case "golf":
            textPlantilla.value = "Incidencia: El Colaborador indica que \nError: \n \n1. Nombre de la persona contacto: \n2. Teléfono y Celular del contacto: \n3. Código de Oficina para Sucursal: \n4. Datos de la persona que presenta el problema: \nNombre completo: \nUsuario de red: \nCódigo del usuario de GOLF SiFBranch: \nNombre de la estación de trabajo: \n5. Descripción del proceso que realiza, incluyendo el código rápido y nombre de la transacción: \n6. ¿Es el único afectado o hay más personas con la misma situación? ¿Cuántos?:";
            break;
        case "qflow":
            textPlantilla.value = "1. Versión del Sistema Q-Flow: (5.7 <https://gestionfilas.bancolombia.corp/QFlow> o 6.2 <https://gestionfilas.apps.bancolombia.corp/QFlow>): \n2.Código y Nombre de la Sucursal: \n3.Nombre de la persona contacto: \n4.Fecha y hora de la afectación: \n5.Dispositivo Afectado: \n6.Serial del MPC: \n8.Descripción clara y detallada de la situación: \n9.Teléfonos de contacto: \n10.Dirección: \n11.Número y tipo de identificación del cliente: \n12.Cantidad de usuarios afectados: \n13.Validar si los demás aplicativos como Golf, Intranet funcionan correctamente: \n14.Verificar que el colaborador no presente bloqueos en DA:\n15. Recurrencia con la que se presenta el incidente ¿Es nuevo o repetitivo?: \n16. Donde se presenta la afectación: (Piso) : Tipo de Servicio: (Caja, asesoría o ambas)";
            break;
        case "win":
            textPlantilla.value = "Incidente: El colaborador informa que tiene lentitud en el equipo. \n• Error: Lentitud \n• Nombre del equipo:  \n• Aplicación mayor Consumo: ";
            break;
        case "usm":
            textPlantilla.value = "Selecciona la plantilla USM";
            break;
        default:
            textPlantilla.value = "Incidente: Colaborador/a informa que \n• Error: \n• Usuario de red: \n• Equipo: ";
    }
}

function cambiarUsm() {
    switch (selectPlantilla2.value) {
        case "usm":
            textPlantilla.value = "Selecciona la plantilla USM";
        case "consulta":
            textPlantilla.value = "1";
            break;
        case "crear":
            textPlantilla.value = "2";
            break;
        case "otro":
            textPlantilla.value = "3";
            break;
        case "falla":
            textPlantilla.value = "4";
            break;
    }
}

function cambiarPlantilla2() {
    switch(selectPlantilla.value) {
        case "usm":
            selectPlantilla2.innerHTML = '<option value="usm">Seleccione</option><option value="consulta">Consulta pedido</option><option value="crear">Creación pedido portafolio</option><option value="otro">Otra ruta UMS</option><option value="falla">Falla USM</option>';
            break;
        case "win":
            selectPlantilla2.innerHTML = '<option value="">Seleccione</option><option value="disco">Disco lleno</option><option value="lentitud">Lentitud</option>';
            break;
        default:
            selectPlantilla2.innerHTML= '<option value="">--Vacio--</option>';
    } 
}

function mostrarCodigo() {
    switch(selectPlantilla.value) {
        case "golf":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es %golf%';
            break;
        case "qflow":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es %qflow%';
            break;
        case "win":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es %windows%';
            break;
        case "usm":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es %usm%';
            break;
        default:
            codigoPlantilla.innerText = '';
    }
}

selectPlantilla.addEventListener('change', cambiarPlantilla);
selectPlantilla.addEventListener('change', cambiarPlantilla2);
selectPlantilla2.addEventListener('change', cambiarUsm);
selectPlantilla.addEventListener('change', mostrarCodigo);

