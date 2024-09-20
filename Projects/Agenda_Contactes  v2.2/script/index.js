var nom = document.getElementById("name");
var cognoms = document.getElementById("surname");
var telefon = document.getElementById("telf");
var correu = document.getElementById("mail");
var llista = document.getElementById("list");
var numid = 0;

carregar_Contactes();

function crear_Contacte(){

    var contacte = "Nom: " + nom.value + " " + cognoms.value + " Telefon: " + telefon.value + " Correu electrònic: " + correu.value;

    if (nom.value !="" && cognoms.value !="" && telefon.value !="" && correu.value !=""){

        afegir_Contacte(contacte);

        nom.value = "";
        cognoms.value = "";
        telefon.value = "";
        correu.value = "";

        guardar_Contacte();

    }else{

        alert("Has d'emplenar els camps!");

    }

}

function afegir_Contacte(contacte){

    listItem = document.createElement('li');
    listItem.setAttribute('id',numid);
    numid = numid +1;

    listItem.textContent = contacte;

    llista.appendChild(listItem);

}


function guardar_Contacte(){

    var contactes = [];

    llista.querySelectorAll('li').forEach(function(item){

        contactes.push(item.textContent.trim());

    });

    localStorage.setItem("contacte",JSON.stringify(contactes));

}

function carregar_Contactes(){

    var contactes = JSON.parse(localStorage.getItem("contacte")) || [];

    contactes.forEach(afegir_Contacte);

}

function eliminar_Contactes(){

    localStorage.clear();
    location.reload();

}