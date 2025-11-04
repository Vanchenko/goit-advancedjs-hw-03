import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import refs from './js/refs';
import { loadPictures } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

let query="";
refs.spinner.style.display = "none";
refs.srhFormEl.addEventListener("submit", (event) => {  
    event.preventDefault();
    query = (refs.srhFormEl.elements[0].value).trim();
    if (query === "") {
        console.log("return");
        event.currentTarget.reset();
        return
    };
    event.currentTarget.reset();
    refs.srhFormEl.children[1].setAttribute('disabled', 'true');
    refs.galleryEl.innerHTML = "";
    refs.spinner.style.display = "inline-block";
    loadPictures(query)
        .then((pictures) => {
            if (pictures.hits.length > 0) {
                iziToast.show({ message: `Hooray! We found ${pictures.totalHits} images. Load - ${pictures.hits.length}`, 
                        position: 'topRight',
                        backgroundColor: 'blue',
                        messageColor: 'white',
                })
                renderGallery(pictures);
            }
            else { iziToast.show({message:`Sorry, there are no images matching your search query: "${query}". Please try again!`,
                position: 'topRight',
                backgroundColor: 'red',
                messageColor: 'white',
            }) };
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setTimeout(() => { refs.srhFormEl.children[1].removeAttribute('disabled'); }, 3000);
            refs.spinner.style.display = "none";
        });
});
