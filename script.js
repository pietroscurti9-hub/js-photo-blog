
// SELEZIONO OUTPUT DEL DOM
const outputCard = document.querySelector(".innerCard")

const overlay = document.querySelector(".overlay-container");
const overlayButton = document.querySelector(".btn-overlay");

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

        // CREO UN LOOP "FOREACH" PER ITERARE LE SINGOLE CARD

        cards.forEach((singleCard) => {
            
            // DICHIARO LA COSTANTE IMAGE CHE EQUIVALE ALLE SINGOLE IMMAGINI PRESENTI NELLE CARD
            const image = singleCard.querySelector(".card-img-top")

            // AL CLICK SULLA CARD, VENGONO ESEGUITE LE SEGUENTI FUNZIONI

            singleCard.addEventListener('click', () => {
                // DISPLAY FLEX PER RENDERE VISIBILE L'OVERLAY
                overlay.style.display = "flex"

                // DICHIARO LA COSTANTE OVERLAYIMG, CHE EQUIVALE ALL' IMG PRESENTE NELL' OVERLAYCONTAINER IN HTML 
                // (QUELLA CHE ANDRò A CLICCARE)
                const overlayImg = overlay.querySelector("img")

                // IL SRC DEL TAG IMG PRESENTE NELL OVERLAYCONTAINER IN HTML, EQUIVALE AL SRC DELL IMG PRESENTE NELLA CARD
                overlayImg.src = image.src

            });



        });

    });


    overlayButton.addEventListener(`click`, () => {

    overlay.style.display = "none"

})












