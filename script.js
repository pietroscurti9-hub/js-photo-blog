
// SELEZIONO OUTPUT DEL DOM
const outputCard = document.querySelector(".innerCard")

// RICHIAMO L'API CON UNA VARIABILE
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"




// 1s
axios.get(endpoint)
.then(response => {
    const posts = response.data
    
    let postOutputs = "";
       
    posts.forEach((post, i) => {
        
        const { title, date, url } = post;

        postOutputs += 
        `<div class="col-12 col-md-6 col-lg-4">
        <div class="card h-auto">
                    <img src="${url}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${date}</p>
                    </div>
                </div>
        </div>`
        
        
    });
    console.log(postOutputs);
    outputCard.innerHTML = postOutputs        
})

          
    
console.log('hello there!');









    