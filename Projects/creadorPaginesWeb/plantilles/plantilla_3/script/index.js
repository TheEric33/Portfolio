var ftitle = document.getElementById("ftitol");
var fsubtitle = document.getElementById("fsubtitol");
var fparaph1 = document.getElementById("fparagraf1");
var fparaph2 = document.getElementById("fparagraf2");
var tpag = document.getElementById("tpagina");

var title = document.getElementById("titol");
var subtitle = document.getElementById("subtitol");
var paraph1 = document.getElementById("paragraf1");
var paraph2 = document.getElementById("paragraf2");

function changeText(){

    if (tpag.value == ""){

        tpag.value = "Pàgina estil 3";

    }

    if (ftitle.value != ""){

        title.textContent = ftitle.value;

    }else{

        title.textContent = "Títol";

    }

    if (fsubtitle.value != ""){

        subtitle.textContent = fsubtitle.value;

    }else{

        subtitle.textContent = "Subtítol";

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

}

function saveFile(){

    var body = `
    
        <h1>${title.textContent}</h1>
        <h2>${subtitle.textContent}</h2>
        <section>
            <p>${paraph1.textContent}</p>
        </section>
        <section>
            <p>${paraph2.textContent}</p>
        </section>

    `

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="ca">
        <head>
          <meta charset="UTF-8">
          <title>${tpag.value}</title>
          <style>

            html {
            
                font-family: Helvetica, Arial, sans-serif;
                text-align: center;

            }

            section {

                width: 40%;
                border: solid 2px;
                border-radius: 5px;
                background-color: chartreuse;
                margin-left: 30%;
                margin-top: 7%;
                padding: 1%;

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

