var nom = document.getElementById("name");
var cognoms = document.getElementById("surname");
var telefon = document.getElementById("telf");
var correu = document.getElementById("mail");
var llista = document.getElementById("list");
var numid = 0;

function agregar_Contacte(){

    if(nom.value !="" && cognoms.value !="" && telefon.value !="" && correu.value !=""){

        item = document.createElement("li");
        item.setAttribute("id",numid);
        numid = numid +1;

        item.innerHTML = nom.value + " " + cognoms.value + ", " + telefon.value + "<br>" + correu.value + " <button onclick=deleteItem("+ this.item.id +")>X</button>";

        llista.appendChild(item);

        nom.value = "";
        cognoms.value = "";
        telefon.value = "";
        correu.value = "";

    }else{

        alert("Dades incomplertes!");

    }

    

}

function deleteItem(numid){

    var element = document.getElementById(numid);

    llista.removeChild(element);

}