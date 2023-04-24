const selectPlantilla = document.getElementById('selectPlantilla');
const textPlantilla = document.getElementById('textPlantilla');
const selectPlantilla2 = document.getElementById('selectPlantilla2');
const codigoPlantilla = document.getElementById('codigoPlantilla');
const botonCopiar = document.getElementById('copy');

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
        case "as400":
            textPlantilla.value = "Incidente: El colaborador indica que no puede iniciar sesión en As/400. XXXX\n\nError:El usuario XXXXX ha alcanzado el límite de sesiones de dispositivo.\nUsuario Afectado: XXXXXXX\nRazón por la cual el director de servicio no realizó el desbloqueo: XXXXXXXXXXXXXXXXXX";
            break;
        case "hclient":
            textPlantilla.value = "Incidente: Colaborador indica que se le genera un error al interactuar con Biometria.\n\nError: Error inesperado, por favor contacte a la mesa de ayuda \nEquipo: \nContacto:";
            break;
        case "wiw":
            textPlantilla.value = "Incidente: Colaborador indica que requiere configurar Scanback para digitalizar documentos.\nError: N/A\n\nEquipo:";
            break;
        default:
            textPlantilla.value = "Incidente: Colaborador/a informa que \n• Error: \n• Usuario de red: \n• Equipo: ";


    }
}

function cambiarTexto() {
    switch (selectPlantilla2.value) {
        case "usm":
            textPlantilla.value = "Selecciona la plantilla USM";
        case "consultaUsm":
            textPlantilla.value = "Incidente: El colaborador necesita consultar la solicitud de Pedido.\n\nError: N/A\nEquipo: (documentar el nombre del equipo en caso de tomar control remoto)\nID del Pedido consultado:";
            break;
        case "crearUsm":
            textPlantilla.value = "Incidente: El colaborador requiere conocer la ruta para solicitar permisos para XXXX\n\nError: N/A\nEquipo: (documentar el nombre del equipo en caso de tomar control remoto)\nContacto:\n\n***Recuerda Direccionar al Colaborador al Sitio ¿Y como lo hago? para conocer el flujo por el que debe radicar su pedido***";
            break;
        case "otroUsm":
            textPlantilla.value = "Incidente: El colaborador requiere asesoría en radicar un pedido para XXXXXXX\n\nError: N/A\nEquipo: (documentar el nombre del equipo en caso de tomar control remoto)\nRuta del pedido suministrada: \nContacto:";
            break;
        case "fallaUsm":
            textPlantilla.value = "Incidente: El colaborador reporta fallas con USM, indica que XXXX\n\nError: Documentar el error presentado.\nEquipo:\nContacto:";
            break;
        case "rutasUsm":
            textPlantilla.value = "Incidente: El colaborador requiere conocer la ruta para solicitar permisos para acceder a Rutas Compartidas\n\nError: N/A \n\nRuta Compartida: \n\n*** Es importante documentar la ruta completa a la que el colaborador requiere acceso ***\n***Recuerda Direccionar al Colaborador al Sitio ¿Y como lo hago? para conocer el flujo por el que debe radicar su pedido***";
            break;
        case "basicos":
            textPlantilla.value = "Incidente: Colaborador/a informa que \n• Error: \n• Usuario de red: \n• Equipo: ";
            break;
        case "sitio":
            textPlantilla.value = "• Código y/o Nombre de Edificio o Sucursal: \n• Horario de atención: \n• Ciudad: \n• Dirección: \n✆ Teléfono y/o Celular: \n\nIncidente: Colaborador/a informa que \n• Error: \n• Usuario de red: \n• Equipo: ";
            break;
        case "lentitud":
            textPlantilla.value = "Incidente: El colaborador informa que tiene lentitud en el equipo.\n\nError: Lentitud\nNombre del equipo:\nAplicación mayor Consumo:\n\nCR: \nLAPS:\nContacto:\n\n**** Consulta el Administrador de Tareas y Documenta la Aplicación que está generando el mayor consumo.";
            break;
        case "disco":
            textPlantilla.value = "Incidente: El colaborador informa que tiene el disco lleno en el equipo.\n\nError: Disco lleno\nNombre del equipo:\n\nCR: \nLAPS:\nContacto: ";
            break;
        case "nuevoLotus":
            textPlantilla.value = "Incidente: El colaborador informa que no puede acceder a Lotus Notes ya que no está tomando la contraseña que digita.\n\nError: Contraseña incorrecta (Asegúrese que utiliza las mayúsculas y minúsculas correctamente).\n\n• Usuario de Lotus: • Correo: XXXX@bancolombia.com.co\n• Contacto:";
            break;
        case "configLotus":
            textPlantilla.value = "Incidente: El colaborador informa que requiere configurar el archivo ID para lograr acceder a Lotus.\n\nError: N/A\nEquipo:\nntacto:";
            break;
    }
}

function cambiarPlantilla2() {
    switch (selectPlantilla.value) {
        case "usm":
            selectPlantilla2.innerHTML = '<option value="usm">Seleccione</option><option value="consultaUsm">Consulta pedido</option><option value="crearUsm">Creación pedido portafolio</option><option value="otroUsm">Otra ruta UMS</option><option value="fallaUsm">Falla USM</option><option value=rutasUsm>Rutas Compartidas</option>';            
            break;
        case "win":
            selectPlantilla2.innerHTML = '<option value="">Seleccione</option><option value="disco">Disco lleno</option><option value="lentitud">Lentitud</option>';
            break;
        case "datos":
            selectPlantilla2.innerHTML = '<option value="">Seleccione</option><option value="basicos">Datos basicos</option><option value="sitio">Datos sitio</option>';
            break;
        case "lotus":
            selectPlantilla2.innerHTML = '<option value="">Seleccione</option><option value="nuevoLotus">Nuevo ID</option><option value="configLotus">Configuración</option>';
            break;
        default:
            selectPlantilla2.innerHTML = '<option value="default">--Vacio--</option>';
    }
}

function mostrarCodigo() {
    switch (selectPlantilla.value) {
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

botonCopiar.addEventListener('click', function () {
    textPlantilla.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
})

let contadorCopias = 1;

function guardarContenido() {
    const copiarPlantilla = document.querySelector('#textPlantilla');
    const contenido = copiarPlantilla.value;

    const contenedor = document.createElement('div')
    contenedor.id = 'copiado-' + contadorCopias;
    document.querySelector('#contenedor').appendChild(contenedor);

    const parrafo = document.createElement('p');
    const titulo = document.createElement('h3');
    titulo.innerHTML = 'Incidente #' + contadorCopias;
    parrafo.innerHTML = contenido;
    contenedor.appendChild(titulo);
    contenedor.appendChild(parrafo);

    contadorCopias++;
}

selectPlantilla.addEventListener('change', cambiarPlantilla);
selectPlantilla.addEventListener('change', cambiarPlantilla2);
selectPlantilla2.addEventListener('change', cambiarTexto);
selectPlantilla.addEventListener('change', mostrarCodigo);


