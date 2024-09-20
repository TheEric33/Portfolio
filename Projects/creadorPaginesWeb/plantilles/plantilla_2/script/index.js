var ftitle = document.getElementById("ftitol");
var fsubtitle1 = document.getElementById("fsubtitol1");
var fparaph1 = document.getElementById("fparagraf1");
var fparaph2 = document.getElementById("fparagraf2");
var fsubtitle2 = document.getElementById("fsubtitol2");
var fparaph3 = document.getElementById("fparagraf3");
var tpag = document.getElementById("tpagina");

var title = document.getElementById("titol");
var subtitle1 = document.getElementById("subtitol1");
var paraph1 = document.getElementById("paragraf1");
var paraph2 = document.getElementById("paragraf2");
var subtitle2 = document.getElementById("subtitol2");
var paraph3 = document.getElementById("paragraf3");



function changeText(){

    if (tpag.value == ""){

        tpag.value = "Pàgina estil 2";

    }

    if (ftitle.value != ""){

        title.textContent = ftitle.value;

    }else{

        title.textContent = "Títol";

    }

    if (fsubtitle1.value != ""){

        subtitle1.textContent = fsubtitle1.value;

    }else{

        subtitle1.textContent = "Subtítol 1";

    }

    if (fparaph1.value != ""){

        paraph1.textContent = fparaph1.value;

    }else{

        paraph1.textContent = "Paràgraf 1";

    }

    if (fparaph2.value != ""){

        paraph2.textContent = fparaph2.value;

    }else{

        paraph2.textContent = "Paràgraf 2";

    }

    if (fsubtitle2.value != ""){

        subtitle2.textContent = fsubtitle2.value;

    }else{

        subtitle2.textContent = "Subtítol 2";

    }

    if (fparaph3.value != ""){

        paraph3.textContent = fparaph3.value;

    }else{

        paraph3.textContent = "Paràgraf 3";

    }

}

function saveFile(){

    var body = `
    
        <h1>${title.textContent}</h1>
        <h2>${subtitle1.textContent}</h2>
        <p>${paraph1.textContent}</p>
        <p>${paraph2.textContent}</p>
        <h2>${subtitle2.textContent}</h2>
        <p>${paraph3.textContent}</p>

    `;

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="ca">
        <head>
          <meta charset="UTF-8">
          <title>${tpag.value}</title>
          <style>

            html {

            font-family: Verdana, Geneva, Tahoma, sans-serif;
            background-color: #000;
            color: #fff;
            text-align: center;
    
        }

        input {

            font-family: Verdana, Geneva, Tahoma, sans-serif;

        }

          </style>
        </head>
        <body>
          ${body}
        </body>
        </html>
      `;

    const blob = new Blob([htmlContent], { type: 'text/html' });

    const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'index.html';  
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    
      location.reload();

}