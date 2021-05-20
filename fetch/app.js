document.getElementById('text').addEventListener('click', loadText);
document.getElementById('json').addEventListener('click', loadJson);
document.getElementById('api').addEventListener('click', loadAPI);

// <ul>
//     <li>ID: ${emp.id}</li>
                //     <li>Name: ${emp.name}</li>
                //     <li>Company: ${emp.company}</li>
                //     <li>Status: ${emp.position}</li>
                
                // </ul>
                
                
function loadText(){
    const el = document.getElementById('output');
    fetch('data.txtt')
    .then((res)=> res.text())
    .then(data => el.innerHTML = `<h1>${data}</h1>`)
    .catch(err => console.log(err.message))
}



 


// function API() {

//     const url = 'https://jsonplaceholder.typicode.com/posts'
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', `${url}`, true);

//     xhr.onload = function(){
//         if(this.status === 200) {
//             const el = document.getElementById('output');
//             const res = JSON.parse(this.responseText);


//             // console.log(res);
//             let output = '';

//             for(i=0; i<5; i++){
//                const post = res[i];

//                 output +=`
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//                 `;

//             }

//             el.innerHTML = output
            
            
//         }

        
//     }

//     xhr.send()
// }