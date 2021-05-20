document.getElementById('text').addEventListener('click', loadText);
document.getElementById('json').addEventListener('click', loadJson);
document.getElementById('api').addEventListener('click', loadAPI);


function loadText() {
        //create ... object
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'data.txt', true);
        
        //execute ajax call
        xhr.onload = function() {
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>${this.responseText}`
        }
    }
        //send request
        xhr.send()

}


function loadJson() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'emp.json', true);

    xhr.onload = function() {
        if(this.status === 200) {

            const emp = (JSON.parse(this.responseText));
            const output = document.getElementById('output');
            
            output.innerHTML = `
                <ul>
                    <li>ID: ${emp.id}</li>
                    <li>Name: ${emp.name}</li>
                    <li>Company: ${emp.company}</li>
                    <li>Status: ${emp.position}</li>
                
                </ul>
            `;

            
        }
    }

    xhr.send();
}


function loadAPI() {

    const url = 'https://jsonplaceholder.typicode.com/posts'
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${url}`, true);

    xhr.onload = function(){
        if(this.status === 200) {
            const el = document.getElementById('output');
            const res = JSON.parse(this.responseText);


            // console.log(res);
            let output = '';

            for(i=0; i<5; i++){
               const post = res[i];

                output +=`
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                `;

            }

            el.innerHTML = output
            
            
        }

        
    }

    xhr.send()
}