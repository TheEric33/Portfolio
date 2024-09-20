var ftitle = document.getElementById("ftitol");
var fsubtitle = document.getElementById("fsubtitol");
var fsemit1 = document.getElementById("fsemi1");
var fsemit2 = document.getElementById("fsemi2");
var fsemit3 = document.getElementById("fsemi3");
var fparag1 = document.getElementById("fparagraf1");
var fparag2 = document.getElementById("fparagraf2");
var fparag3 = document.getElementById("fparagraf3");
var tpag = document.getElementById("tpagina");

var title = document.getElementById("titol");
var subtitle = document.getElementById("subtitol");
var semit1 = document.getElementById("semi1");
var semit2 = document.getElementById("semi2");
var semit3 = document.getElementById("semi3");
var parag1 = document.getElementById("paragraf1");
var parag2 = document.getElementById("paragraf2");
var parag3 = document.getElementById("paragraf3");



function changeText(){

    if (tpag.value == ""){

        tpag.value = "Pàgina estil 1";

    }

    if (ftitle.value != ""){

        title.textContent = ftitle.value;
        

    }else{

        title.textContent = "Titular";

    }

    if (fsubtitle.value != ""){

        subtitle.textContent = fsubtitle.value;
        

    }else{

        subtitle.textContent = "Subtítol";

    }

    if (fsemit1.value != ""){

        semit1.textContent = fsemit1.value;
        

    }else{

        semit1.textContent = "Semitítol 1";

    }

    if (fparag1.value != ""){

        parag1.textContent = fparag1.value;
        

    }else{

        parag1.textContent = "Paràgraf 1";

    }
    
    if (fsemit2.value != ""){

        semit2.textContent = fsemit2.value;
        

    }

    if (fparag2.value != ""){

        parag2.textContent = fparag2.value;
        

    }

    if (fsemit3.value != ""){

        semit3.textContent = fsemit3.value;
        

    }

    if (fparag3.value != ""){

        parag3.textContent = fparag3.value;
        

    }

}

function saveFile(){

    var body = `
    
        <h1>${title.textContent}</h1>
        
        <h2>${subtitle.textContent}</h2>
        

        <section id="text">

            <section id="p1">

                <h3>${semit1.textContent}</h3>
                <p>${parag1.textContent}</p>

            </section>
            <section id="p2">

                <h3>${semit2.textContent}</h3>
                <p>${parag2.textContent}<p>

            </section>
            <section id="p3">

                <h3>${semit3.textContent}</h3>
                <p>${parag3.textContent}</p>

            </section>

        </section>

    `;

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="ca">
        <head>
          <meta charset="UTF-8">
          <title>${tpag.value}</title>
          <style>

            html { font-family: Verdana, Geneva, Tahoma, sans-serif;}

            input { font-family: Verdana, Geneva, Tahoma, sans-serif;}

            #cos {

                width: 100%;
                text-align: center;
                }
                
            #text { display: flex; }

            #p1 {

                justify-content: left;
                width: 30%;
            }

            #p2 {

                justify-content: center;
                width: 30%;

            }

            #p3 {

                justify-content: right;
                width: 30%;

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
