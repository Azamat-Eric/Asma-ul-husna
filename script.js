let names_div = document.getElementById("names-div");
let table = document.querySelector("#names-div table");

fetch("99_Names_Of_Allah.json").
    then((response)=>{return response.json();}).
    then(function(data){
        console.log(data);
        for(let i = 0; i<data.data.length; i++){
            table.innerHTML += `
                            <tr>
                                <td>${i+1}</td>
                                <td>${data.data[i].name}</td>
                                <td>${data.data[i].transliteration}</td>
                                <td>${data.data[i].en.meaning}</td>
                                <td>${data.data[i].en.desc}</td>
                            </tr>
            `;
        }
    }).catch((err)=>{
        console.log(err);
    });