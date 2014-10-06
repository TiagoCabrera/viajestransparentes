function dataLoad() {

    var limit = 20;
    var condition = '_id < ' + limit + ' order by random()';
    var link = 'http://datamx.io/api/action/datastore_search_sql?sql=SELECT * from "ea057a32-1895-46ad-beda-ec1960d3e01a" Where ' + condition;
    $.ajax({
        url: link,
        data: null,
        dataType: 'jsonp',
        success: function (data) {
            for (i = 0; i < 20; i++) {
                displayData(data.result.records, i);
                document.getElementById("load").style.display="none";
            }
        }
    });
}

function displayData(data,i) {

    var body = document.getElementById("search");

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tabla.id = "tablita";

    var hilera = document.createElement("tr");

    var celda1 = document.createElement("td");
    celda1.style.width = "200px";
    celda1.style.height = "20px";

    var name = data[i]["Nombre"];
    var apepat = data[i]["Primer Apellido"];
    var apemat = data[i]["Segundo Apellido"];

    name = clearText(name);
    apemat = clearText(apemat);
    apepat = clearText(apepat);
    var nombre = name  + apepat + apemat;
    

    var p01 = document.createElement("p");
    p01.style.margin = "0px";
    p01.innerHTML = nombre;
    celda1.appendChild(p01);

    var celda2 = document.createElement("td");
    celda2.style.width = "300px";
    celda2.style.height = "20px";

    var p02 = document.createElement("p");
    p02.style.margin = "0px";
    p02.innerHTML = data[i]["Nombre del Cargo"];
    celda2.appendChild(p02);

    var celda3 = document.createElement("td");
    celda3.style.width = "50px";
    celda3.style.height = "20px";

    var p03 = document.createElement("p");
    p03.style.margin = "0px";
    p03.innerHTML = data[i]["Clave del Puesto/Remuneración Salarial"];
    celda3.appendChild(p03);

    var celda4 = document.createElement("td");
    celda4.style.width = "180px";
    celda4.style.height = "20px";

    var p04 = document.createElement("p");
    p04.style.margin = "0px";
    p04.innerHTML = data[i]["Correo Electrónico"];
    celda4.appendChild(p04);

    var celda5 = document.createElement("td");
    celda5.style.width = "100px";
    celda5.style.height = "20px";


    var p05 = document.createElement("a");
    p05.style.margin = "0px";
    p05.style.fontFamily = "Times";
    p05.style.paddingLeft = "50px";
    p05.innerHTML = 0;
    celda5.appendChild(p05);


    var direccion = "perfilservidor.html?servidorpublico=" + data[i]["_id"];
    p05.setAttribute("href",direccion);

    var nombre=nombre.substr(1);
    var size = comisionLoad(nombre.toUpperCase(),p05);
    
    

    hilera.appendChild(celda1);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    hilera.appendChild(celda4);
    hilera.appendChild(celda5);
    tblBody.appendChild(hilera);
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
}

function clearText(text) { 
    text.replace(" ","");
    return text;
}

function comisionLoad(nombre,element) {
    nombre = omitirAcentos(nombre);
    
    var condition = '"Servidor publico comisionado" ilike ' + "'%" + nombre + "%'";
    var size = 100;
    var link = 'http://datamx.io/api/action/datastore_search_sql?sql=SELECT * from "27557a5b-adf3-4422-adf8-afd472e5bb38" Where ' + condition;

    $.ajax({
        url: link,
        data: null,
        dataType: 'jsonp',
        success: function (data) {
            var nComisiones = 0;
            //alert(data.result.records[0]["_id"]);
            data = data.result.records;
            for (var key in data) {
                nComisiones++;
            }
            element.innerHTML = nComisiones;
        }
    });
    return (size);
}

function omitirAcentos(text) {
    var acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÇç";
    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuucc";
    for (var i=0; i<acentos.length; i++) {
        text = text.replace(acentos.charAt(i), original.charAt(i));
    }
    return text;
}

function searchData() {
    var limit = 20;
    var text = document.getElementById("inputBusqueda").value;
    var condition = '"Nombre completo" ilike '+ "'%" + text + "%'";
    document.getElementById("load").style.display="block";
    clearSearch();
    var link = 'http://datamx.io/api/action/datastore_search_sql?sql=SELECT * from "ea057a32-1895-46ad-beda-ec1960d3e01a" Where '+ condition;
    $.ajax({
        url: link,
        data: null,
        dataType: 'jsonp',
        success: function (data) {
            for (i = 0; i < 20; i++) {
                loadData(data.result.records,i);
            }
        }
    });
    
}

function clearSearch() { 
    //Obtenemos el div Contenedor
    var body = document.getElementById("ContentSearch");
    var search = document.getElementById("search");
    body.removeChild(search);

    var search = document.createElement("div");
    search.id = "search";
    search.style.width= "940px";
    search.style.height= "auto";
    search.style.margin= "0px";
    search.style.backgroundColor = "#abababa";

    body.appendChild(search);
}

function loadData(data,i) {

    var body = document.getElementById("ContentSearch");
    var search = document.getElementById("search");

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tabla.id = "tablita";

    var hilera = document.createElement("tr");

    var celda1 = document.createElement("td");
    celda1.style.width = "200px";
    celda1.style.height = "20px";

    var name = data[i]["Nombre"];
    var apepat = data[i]["Primer Apellido"];
    var apemat = data[i]["Segundo Apellido"];

    name = clearText(name);
    apemat = clearText(apemat);
    apepat = clearText(apepat);
    var nombre = name  + apepat + apemat;

    var p01 = document.createElement("p");
    p01.style.margin = "0px";
    p01.innerHTML = nombre;
    celda1.appendChild(p01);

    var celda2 = document.createElement("td");
    celda2.style.width = "300px";
    celda2.style.height = "20px";

    var p02 = document.createElement("p");
    p02.style.margin = "0px";
    p02.innerHTML = data[i]["Nombre del Cargo"];
    celda2.appendChild(p02);

    var celda3 = document.createElement("td");
    celda3.style.width = "50px";
    celda3.style.height = "20px";

    var p03 = document.createElement("p");
    p03.style.margin = "0px";
    p03.innerHTML = data[i]["Clave del Puesto/Remuneración Salarial"];
    celda3.appendChild(p03);

    var celda4 = document.createElement("td");
    celda4.style.width = "180px";
    celda4.style.height = "20px";

    var p04 = document.createElement("p");
    p04.style.margin = "0px";
    p04.innerHTML = data[i]["Correo Electrónico"];
    celda4.appendChild(p04);

    var celda5 = document.createElement("td");
    celda5.style.width = "100px";
    celda5.style.height = "20px";


    var p05 = document.createElement("a");
    p05.style.margin = "0px";
    p05.style.fontFamily = "Times";
    p05.style.paddingLeft = "50px";
    p05.innerHTML = 0;
    celda5.appendChild(p05);


    var direccion = "perfilservidor.html?servidorpublico=" + data[i]["_id"];
    p05.setAttribute("href",direccion);

    var nombre=nombre.substr(1);
    var size = comisionLoad(nombre.toUpperCase(),p05);
   
    hilera.appendChild(celda1);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    hilera.appendChild(celda4);
    hilera.appendChild(celda5);

    tblBody.appendChild(hilera);
    tabla.appendChild(tblBody);
    search.appendChild(tabla);
    body.appendChild(search);
    document.getElementById("load").style.display="none";
}


/* Eventos de Perfil */

function loadperfilservidor() { 
    var Url = location.href;
    Url = Url.replace(/.*\?(.*?)/,"$1");
    Variables = Url.split ("&");
    for (i = 0; i < Variables.length; i++) {
        Separ = Variables[i].split("=");
        eval ('var '+Separ[0]+'="'+Separ[1]+'"');
    }
    
    var condition = '"_id" = ' + servidorpublico;
    
    var link = 'http://datamx.io/api/action/datastore_search_sql?sql=SELECT * from "ea057a32-1895-46ad-beda-ec1960d3e01a" Where '+ condition;

    $.ajax({
        url: link,
        data: null,
        dataType: 'jsonp',
        success: function (data) {
            setPerfilFuncionario(data.result.records);
            
        }
    });
}

function setPerfilFuncionario(data){
    

    var name = data[0]["Nombre"];
    var apepat = data[0]["Primer Apellido"];
    var apemat = data[0]["Segundo Apellido"];

    name = clearText(name);
    apemat = clearText(apemat);
    apepat = clearText(apepat);
    var nombre = name  + apepat + apemat;

    document.getElementById("nombre").innerHTML = "NOMBRE: "+ nombre;
    document.getElementById("cargo").innerHTML = "CARGO: "+ data[0]["Nombre del Cargo"];
    document.getElementById("ncomision").innerHTML = "PERSONAL DE: "+ data[0]["Tipo de Personal"];
    document.getElementById("grupo").innerHTML = "GRUPO: "+ data[0]["Clave del Puesto/Remuneración Salarial"];
    
    document.getElementById("institución").innerHTML = data[0]["Institución"];
    document.getElementById("nombreC").innerHTML = data[0]["Nombre completo"];
    document.getElementById("nombreCargo").innerHTML = data[0]["Nombre del Cargo"];
    document.getElementById("nombreCargoS").innerHTML = data[0]["Nombre del Cargo Superior"];

    document.getElementById("UA").innerHTML = data[0]["Unidad Administrativa"];

    document.getElementById("claveR").innerHTML = data[0]["Clave del Puesto/Remuneración Salarial"];
    document.getElementById("nombrePuesto").innerHTML = data[0]["Nombre del Puesto"];
    document.getElementById("correo").innerHTML = data[0]["Correo Electrónico"];

    var nombre=nombre.substr(1);
    comisionSaerch(nombre.toUpperCase());
    
}

function comisionSaerch(nombre,element) {
    nombre = omitirAcentos(nombre);
    
    var condition = '"Servidor publico comisionado" ilike ' + "'%" + nombre + "%'";
    var size = 100;
    var link = 'http://datamx.io/api/action/datastore_search_sql?sql=SELECT * from "27557a5b-adf3-4422-adf8-afd472e5bb38" Where ' + condition;

    $.ajax({
        url: link,
        data: null,
        dataType: 'jsonp',
        success: function (data) {
            data = data.result.records;
            for (var key in data) {
                displayComisionSearch(data);
            }
        }
    });
}

function displayComisionSearch(data) {

    var tabla = document.getElementById("comisiones");
    var hilera = document.createElement("tr");

        var celda1 = document.createElement("td");
        celda1.style.height = "20px";
        var p01 = document.createElement("a");
        p01.style.margin = "0px";
        p01.style.fontFamily = "Times";
        p01.innerHTML = data[0]["Numero de comision"]
        celda1.appendChild(p01);

        var direccion = "detallescomision.html?numerocomision=" + data[0]["_id"];
        p01.setAttribute("href",direccion);

        var celda2 = document.createElement("td");
        celda2.style.height = "20px";
        var p02 = document.createElement("p");
        p02.style.margin = "0px";
        p02.innerHTML = data[0]["Fecha de inicio de participacion en el evento o actividad"]
        celda2.appendChild(p02);

        var celda3 = document.createElement("td");
        celda3.style.height = "20px";
        var p03 = document.createElement("p");
        p03.style.margin = "0px";
        p03.innerHTML = data[0]["Tipo de viaje"]
        celda3.appendChild(p03);

        var celda4 = document.createElement("td");
        celda4.style.height = "20px";
        var p04 = document.createElement("p");
        p04.style.margin = "0px";
        p04.innerHTML = data[0]["Ciudad de origen"]
        celda4.appendChild(p04);

        var celda5 = document.createElement("td");
        celda5.style.height = "20px";
        var p05 = document.createElement("p");
        p05.style.margin = "0px";
        p05.innerHTML = data[0]["Ciudad de destino"]
        celda5.appendChild(p05);

        var celda6 = document.createElement("td");
        celda6.style.height = "20px";
        var p06 = document.createElement("p");
        p06.style.margin = "0px";
        p06.innerHTML = data[0]["Monto comprobado de viaticos"] + data[0]["Moneda"];
        celda6.appendChild(p06);

        hilera.appendChild(celda1);
        hilera.appendChild(celda2);
        hilera.appendChild(celda3);
        hilera.appendChild(celda4);
        hilera.appendChild(celda5);
        hilera.appendChild(celda6);
    tabla.appendChild(hilera);
}


/* Comision Detail */


function loadComisionDetail() {
    var Url = location.href;
    Url = Url.replace(/.*\?(.*?)/,"$1");
    Variables = Url.split ("&");
    for (i = 0; i < Variables.length; i++) {
        Separ = Variables[i].split("=");
        eval ('var '+Separ[0]+'="'+Separ[1]+'"');
    }
    var condition = '"_id" = ' + numerocomision;
    var link = 'http://datamx.io/api/action/datastore_search_sql?sql=SELECT * from "27557a5b-adf3-4422-adf8-afd472e5bb38" Where ' + condition;
    $.ajax({
        url: link,
        data: null,
        dataType: 'jsonp',
        success: function (data) {
            setData(data.result.records);
        }
    });

}


function setData(data) { 
                    
                    
    document.getElementById("nombre").innerHTML = "NOMBRE: "+ data[0]["Servidor publico comisionado"];
    document.getElementById("cargo").innerHTML = "CARGO: "+  data[0]["Cargo"];
    document.getElementById("ncomision").innerHTML = "COMISIÓN: "+  data[0]["Numero de comision"];
    document.getElementById("grupo").innerHTML = "GRUPO: "+  data[0]["Grupo jerarquico"];
                    
                    
    document.getElementById("MecOrigen").innerHTML = data[0]["Mecanismo que origina la comisión"];
    document.getElementById("InstGenera").innerHTML = data[0]["Quien invita o que UR solicita"];
    document.getElementById("UR").innerHTML = data[0]["Unidad Responsable que genera la nota de viaje area sustantiva"];
    document.getElementById("TipoRep").innerHTML = data[0]["Tipo de representacion requerida"];



    document.getElementById("TipoViaje").innerHTML = data[0]["Tipo de viaje"];
    document.getElementById("Acuerdo").innerHTML = data[0]["No de acuerdo de autorización del pleno"];
    document.getElementById("Oficio").innerHTML = data[0]["No de oficio de comisión"];
    document.getElementById("PaisOrigen").innerHTML = data[0]["Pais de origen"];
    document.getElementById("EstadoOrigen").innerHTML = data[0]["Estado de origen"];
    document.getElementById("CiudadOrigen").innerHTML = data[0]["Ciudad de origen"];
    document.getElementById("PaisDestino").innerHTML = data[0]["Pais de destino"];
    document.getElementById("EstadoDestino").innerHTML = data[0]["Estado o equivalente de destino"];
    document.getElementById("CiudadDestino").innerHTML = data[0]["Ciudad de destino"];



    document.getElementById("CubrePasaje").innerHTML = data[0]["Institucion que cubre pasaje"];
    document.getElementById("TipoPasaje").innerHTML = data[0]["Tipo de pasaje"];
    document.getElementById("LineaOrigen").innerHTML = data[0]["Aerolinea de vuelo de ida"];
    document.getElementById("VueloOrigen").innerHTML = data[0]["Numero de vuelo de ida"];
    document.getElementById("LineaRegreso").innerHTML = data[0]["Aerolineas de vuelo de regreso"];
    document.getElementById("VueloRegreso").innerHTML = data[0]["Numero de vuelo de regreso"];
    document.getElementById("FechaInicioCom").innerHTML = data[0]["Fecha de inicio de la comision"];
    document.getElementById("FechaFinCom").innerHTML = data[0]["Fecha de termino de la comision"];
    document.getElementById("GatosPasaje").innerHTML = "$"+ data[0]["Gasto por concepto de pasajes en MN"];

    document.getElementById("TarifaDiaria").innerHTML = "$"+ data[0]["Tarifa diaria de viaticos por dia"];
    document.getElementById("Moneda").innerHTML = data[0]["Moneda"];
    document.getElementById("GastosViaticos").innerHTML = "$"+ data[0]["Gasto por concepto de viaticos en MN"];
    document.getElementById("InstHospedaje").innerHTML = data[0]["Institucion que cubre hospedaje"];
    document.getElementById("Hotel").innerHTML = data[0]["Nombre del hotel"];
    document.getElementById("FechaEntrada").innerHTML = data[0]["Fecha de entrada"];
    document.getElementById("FechaSalida").innerHTML = data[0]["Fecha de salida"];
    document.getElementById("CostoHotel").innerHTML = "$"+ data[0]["Costo total del hospedaje"];
    document.getElementById("Comprobado").innerHTML = "$"+ data[0]["Monto comprobado de viaticos"];
    document.getElementById("SinComprobar").innerHTML = "$"+ data[0]["Monto sin comprobacion"];
    document.getElementById("ViaticoDevuelto").innerHTML = "$"+ data[0]["Monto de viaticos devueltos"];

    document.getElementById("dataObservaciones").innerHTML = data[0]["Observaciones"];



    document.getElementById("tema").innerHTML = data[0]["Tema"];
    document.getElementById("tipoComision").innerHTML = data[0]["Tipo de comisión"];
    document.getElementById("nombreEvento").innerHTML = data[0]["Nombre del evento o actividad principal a la que se asiste"];
    document.getElementById("URL").innerHTML = data[0]["URL del evento"];
    document.getElementById("fechaInicio").innerHTML = data[0]["Fecha de inicio de participacion en el evento o actividad"];
    document.getElementById("fechaFin").innerHTML = data[0]["Fecha de fin de participacion en el evento o actividad"];
    document.getElementById("motivoComision").innerHTML = data[0]["Motivo de la comision"];
                    
}

function dataLoadComision() {

    var limit = 20;
    var condition = '_id < ' + limit + ' order by random()';
    var link = 'http://datamx.io/api/action/datastore_search_sql?sql=SELECT * from "27557a5b-adf3-4422-adf8-afd472e5bb38" Where ' + condition;
    $.ajax({
        url: link,
        data: null,
        dataType: 'jsonp',
        success: function (data) {
            for (i = 0; i < 20; i++) {
                displayDataComision(data.result.records, i);
                document.getElementById("load").style.display="none";
            }
        }
    });
}

function displayDataComision(data,i) {

    var body = document.getElementById("search");

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tabla.id = "tablita";

    var hilera = document.createElement("tr");

    var celda1 = document.createElement("td");
    celda1.style.width = "200px";
    celda1.style.height = "20px";

    var p01 = document.createElement("p");
    p01.style.margin = "0px";
    p01.innerHTML = data[i]["Servidor publico comisionado"];;
    celda1.appendChild(p01);

    var celda2 = document.createElement("td");
    celda2.style.width = "150px";
    celda2.style.height = "20px";

    var p02 = document.createElement("p");
    p02.style.margin = "0px";
    p02.innerHTML = data[i]["Fecha de inicio de la comision"] + " a " + data[i]["Fecha de termino de la comision"] ;
    celda2.appendChild(p02);

    var celda3 = document.createElement("td");
    celda3.style.width = "100px";
    celda3.style.height = "20px";

    var p03 = document.createElement("p");
    p03.style.margin = "0px";
    p03.innerHTML = data[i]["Tipo de viaje"];
    celda3.appendChild(p03);

    var celda4 = document.createElement("td");
    celda4.style.width = "250px";
    celda4.style.height = "20px";

    var p04 = document.createElement("p");
    p04.style.margin = "0px";
    p04.innerHTML = data[i]["Ciudad de origen"] + " a " + data[i]["Ciudad de destino"];
    celda4.appendChild(p04);

    var celda5 = document.createElement("td");
    celda5.style.width = "130px";
    celda5.style.height = "20px";


    var p05 = document.createElement("a");
    p05.style.margin = "0px";
    p05.style.fontFamily = "Times";
    p05.style.paddingLeft = "0px";
    p05.innerHTML = data[i]["Monto comprobado de viaticos"] + " " + data[i]["Moneda"];
    celda5.appendChild(p05);


    var direccion = "detallescomision.html?numerocomision=" + data[i]["_id"];
    p05.setAttribute("href",direccion);    

    hilera.appendChild(celda1);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    hilera.appendChild(celda4);
    hilera.appendChild(celda5);
    tblBody.appendChild(hilera);
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
}
