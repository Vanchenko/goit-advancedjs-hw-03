import{S as u,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const s={galleryEl:document.querySelector(".gallery"),srhFormEl:document.querySelector("#search-form"),spinner:document.querySelector(".loader")},d="35244614-3f1384186f27e7cacc119fb8b",p=async i=>{const e=await fetch(`https://pixabay.com/api/?key=${d}&q=${i}
    &image_type=photo&orientation=horizontal&safesearch=true`);if(!e.ok)throw new Error(`Ошибка загрузки: ${e.status}`);return await e.json()};let f=new u(".gallery a",{enableKeyboard:!0,captionPosition:"bottom",captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,showCounter:!1});function m(i){let e="";e=i.hits.map(o=>`<div class="photo-card">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img src="${o.webformatURL}" alt="${o.tags}" width="360" height="200" loading="lazy"/> 
            </a>
            <ul class="info">
                <li class="info-item">
                    <b>Likes</b>
                    <p>${o.likes}</p>
                </li>
                <li class="info-item">
                    <b>Views</b>
                    <p>${o.views}</p>
                </li>
                <li class="info-item">
                    <b>Comments</b>
                    <p>${o.comments}</p>
                </li>
                <li class="info-item">
                    <b>Downloads</b>
                    <p>${o.downloads}</p>
                </li>
            </ul>
        </div>`).join(""),s.galleryEl.insertAdjacentHTML("beforeend",e),f.refresh()}let l="";s.spinner.style.display="none";s.srhFormEl.addEventListener("submit",i=>{if(i.preventDefault(),l=s.srhFormEl.elements[0].value.trim(),l===""){console.log("return"),i.currentTarget.reset();return}i.currentTarget.reset(),s.srhFormEl.children[1].setAttribute("disabled","true"),s.galleryEl.innerHTML="",s.spinner.style.display="inline-block",p(l).then(e=>{e.hits.length>0?(c.show({message:`Hooray! We found ${e.totalHits} images. Load - ${e.hits.length}`,position:"topRight",backgroundColor:"blue",messageColor:"white"}),m(e)):c.show({message:`Sorry, there are no images matching your search query: "${l}". Please try again!`,position:"topRight",backgroundColor:"red",messageColor:"white"})}).catch(e=>{console.log(e)}).finally(()=>{setTimeout(()=>{s.srhFormEl.children[1].removeAttribute("disabled")},3e3),s.spinner.style.display="none"})});
//# sourceMappingURL=index.js.map
