
// SELEZIONO OUTPUT DEL DOM
const outputCard = document.querySelector(".innerCard")

// RICHIAMO L'API CON UNA VARIABILE
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"





axios.get(endpoint)
    .then(response => {
        const posts = response.data

        // CREO UNA VARIABILE VUOTA IN CUI INSERIRE LE CARDS CON I DATI OTTENUTI DALL' API
        let postOutputs = "";


        // CREO IL CICLO FOREACH CON CUI ITERARE I DATI DELL' API
        posts.forEach((post) => {

            // CREO LE TRE VARIABILI A CUI ASSOCIARE I RISPETTIVI DATI OTTENUTI DALL' API
            const { title, date, url } = post;

            postOutputs +=
                `<div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-auto photo-card">
                        <div class="photo-wrapper">
                            <img src="${url}" class="card-img-top" alt="">
                            <img src="./assets/img/pin.svg" class="pin" alt="">
                        </div>

                        <div class="card-body">
                            <h5 class="card-title card-text-font">${title}</h5>
                            <p class="card-text card-text-font">${date}</p>
                        </div>
                    </div>
                </div>`


        });
        
        // UNA VOLTA FINITA L'OPERAZIONE INSERISCO LA CARD NELL'HTML
        outputCard.innerHTML = postOutputs

        const cards = document.querySelectorAll(".card");

        console.log(cards);
        // loop cards
        // add click event to every card el
        
    })













