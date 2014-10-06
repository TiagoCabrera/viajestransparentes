clearMenu();
function changeDivision(element) {
    document.getElementById("dataContent").innerHTML = "Viajes Transparentes es una división resultado del Instituto Federal de Acceso a la Información Pública y Protección de Datos (IFAI) como parte de su política de transparencia, en colaboración con Codeando México, SocialTIC y el Instituto Mexicano para la Competitividad A.C. (IMCO), en el Reto Viajes Transparentes.";
    clearMenu();
    element.style.opacity = "1";
}
function changeFuncionarios(element) {
    document.getElementById("dataContent").innerHTML = "En esta sección encontraras información relacionada con cada uno de los Funcionarios Públicos en base a su información personal.";
    clearMenu();
    element.style.opacity = "1";
}
function changeComisiones(element) {
    document.getElementById("dataContent").innerHTML = "En esta sección encontrarás información relacionada a cada uno de las comisiones o viajes que realizan cada uno de los Funcionarios Públicos.";
    clearMenu();
    element.style.opacity = "1";
}
function changeEstadisticas(element) {
    document.getElementById("dataContent").innerHTML = "En esta sección encontrarás información desplegada en graficas comparativas de acuerdo a diversos factores que rodean a cada una de las comisiones que realizan los diversos Funcionarios Públicos.";
    clearMenu();
    element.style.opacity = "1";
}

function clearMenu() {
    document.getElementById("contentLogo1").style.opacity = "0.8";
    document.getElementById("contentLogo2").style.opacity = "0.8";
    document.getElementById("contentLogo3").style.opacity = "0.8";
    document.getElementById("contentLogo4").style.opacity = "0.8";
}

function Enlace(link) { 
    location.href = link;
}