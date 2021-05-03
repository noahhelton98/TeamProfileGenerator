



function generateHTML(employees){
    var length = employees.length;

    var header = '';

    for (var i = 0; i < length; i++){

        
        

        let html = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">          
            <h4 class="card-title">${employees[i].name}</h5>
            <h5 class="card-title">${employees[i].role}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${employees[i].id}</li>
                <li class="list-group-item">${employees[i].email}</li>
             </ul>
        </div>
      </div>`
    }


};