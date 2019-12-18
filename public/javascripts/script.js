var table = document.getElementById("resurse-table");


fetch(`../model/json/resurser.json`).then(res => res.json())
.then((data) => {

    for(var i = 0; i< data.length; i++){

        table.innerHTML += `<tr>
                            <td> ${data[i].by} </td>
                            <td> ${data[i].kategori} </td>
                            <td> ${data[i].navn} </td>
                            <td> ${data[i].beskrivelse} </td>
                            <td> ${data[i].adresse} </td> 
                            <td> ${data[i].telefon} </td>
                            <td> ${data[i].åbningstider} </td>
                            <td> ${data[i].website} </td>
                            </tr>`
    }

});

