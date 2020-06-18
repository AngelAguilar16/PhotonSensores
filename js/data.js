function CreateTableFromJSON() {
    var myBooks = [
        {
            "Día": "18/08/2020",
            "Hora": "4:50",
            "Temperatura": "38°",
        },
        {
            "Día": "18/08/2020",
            "Hora": "4:52",
            "Temperatura": "37°",
        },
        {
            "Día": "18/08/2020",
            "Hora": "4:54",
            "Temperatura": "38°",
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
$(function(){
    $(".cargar").click(function(){
      jQuery.get('https://angelaguilar.codes/json/libros.json', function(data){
        $("#cuerpo").html("");
        for(var i=0; i<data.datos.length; i++){
          var tr = `<tr>
            <td>`+data.datos[i].nombre+`</td>
            <td>`+data.datos[i].apellido+`</td>
            <td>`+data.datos[i].cargo+`</td>
          </tr>`;
          $("#cuerpo").append(tr)
        }
      })
    })
})