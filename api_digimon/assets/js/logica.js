const URL_BASE = 'https://digimon-api.vercel.app/api/digimon';
let contenido;
let carta;
let dataNivel;
let dataImagenes;

function mostrarNivel() {
    let contenidoNivel = document.getElementById("contenido2");
    document.getElementById("tabla_principal").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    document.getElementById("carta").style.display = "none";
    document.getElementById("tabla_nivel").style.display = "block";
    contenidoNivel.innerHTML = "";
    for (let temp of dataNivel) {
        contenidoNivel.innerHTML += ` <tr>
<td class="zoomText">${temp.name}</td>   
<td>${temp.level}</td>
</tr> `
    }
}

function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {

        contenido.innerHTML += `<tr> 
        <th scope=row>${temp.name}</th>
        <td><img width="70px" height="70px" src="${temp.img}"></td>
        <td>${temp.level}</td>
        <tr>`;
    }

}

function tarjeta(data) {
    carta.innerHTML = "";

    for (let temp of data) {
        carta.innerHTML += `
        <div id="tarjSola" class="card mb-3 container" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${temp.img}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">"NOMBRE: ${temp.name}"</h5>
          <p class="card-text">NIVEL: "${temp.level}"</p>
         </div>
      </div>
    </div>
  </div>
     `
    }

}

function mostrarImagenes() {
    let img = document.getElementById("galeria");
    document.getElementById("tabla_principal").style.display = "none";
    document.getElementById("carta").style.display = "none";
    document.getElementById("galeria").style.display = "block";

    img.innerHTML = "";
    for (let temp of dataImagenes) {
        img.innerHTML += ` 
         <div id="card" class="card">
        <img src="${temp.img}" class="card-img-top rotate" alt=" imagen ${temp.name}">
        <div class="card-body">
          <h6 class="card-title">${temp.name}</h6>
          <p class="card-text">${temp.level}</p>
        </div>
      </div> `
    }
}

function capturaDato() {
    let nombrePersonaje = document.getElementById("dato").value;
    nombrePersonaje = nombrePersonaje.toLowerCase();
    document.getElementById("tabla_principal").style.display = "none";
    document.getElementById("galeria").style.display = "none"
    document.getElementById("tabla_nivel").style.display = "none";;
    document.getElementById("carta").style.display = "block";

    fetch(URL_BASE + '/name/' + nombrePersonaje)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            tarjeta(datos);
        });
}

$(document).ready(function () {
    contenido = document.getElementById("contenido");
    carta = document.getElementById("carta");

    fetch(URL_BASE)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            tabla(datos);
            dataImagenes = datos;
            dataNivel = datos;
        });
})

