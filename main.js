let cl= console.log
const $contenedor = document.getElementById("contenedor");
    url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";
    $fragment = document.createDocumentFragment();


// function cardLarnU (){
// fetch(url)
// .then((res)=>{
//     return res.ok? res.json(): Promise.reject(res);
// })
// .then((json) => {
//     cl(json);
//     json.forEach((el) => {
//         const div = document.createElement("div");
//         div.innerHTML= `
//         <div class="main_card">
//         <img src="${el.icon}" alt="${el.name}">
//         <h5 class="tittle_card">${el.name}</h5>
//         <p class="paragraph_card">${el.totalQuizzes}</p>
//         <p class="paragraph_card">${el.users}</p>
//         <a href="https://es.larnu.com/">Go to LarnU</a>`
//         $fragment.appendChild(div);
//     });
//     $fetchAPI.appendChild($fragment);
// })
// .catch(err=>{
//     cl("estamos en el catch",err);

// })
// .finally(()=>cl("Esto se ejecutara independientemente"))

// }
// cardLarnU()


// async function fetchApiAsync(){
//     try {
//         let res = await fetch(url),
//         json = await res.json();
//         cl(json)

//         if (!res.ok){
//             throw{
//                 status: res.status,
//                 statusText: res.statusText,
//             };
//         }
//         json.forEach((el) => {
//             const div = document.createElement("div");
//             div.innerHTML= `
//             <div class="main_card">
//             <img src="${el.icon}" alt="${el.name}">
//             <h5 class="tittle_card">${el.name}</h5>
//             <p class="paragraph_card">${el.totalQuizzes}</p>
//             <p class="paragraph_card">${el.users}</p>
//             <a href="https://es.larnu.com/">Go to LarnU</a>
//             </div> `
//             $fetchAPI.appendChild($fragment);
//         });
//         $fragment.appendChild(div);
//     } catch (err) {
        
//     }
// }
// fetchApiAsync()

// function axiosApi(){
//     axios
//     .get(url)
//     .then((res)=>{
//         cl(res);
//         json=res.data.communityCategories; 
        
//         json.forEach((el) => {
//         const div = document.createElement("div");
//         div.classList.add("tarjeta")
//         div.innerHTML+=`
//         <div class="tarjeta_imagen">
//         <img class="tarjetaimagen_background"src="${el.background || "https://storage.googleapis.com/bucket-larnu/media/business/142/images/2P6FENBB.png"}>
//         <img class="tarjeta_imagen_icono" src="${el.icon}" alt="${el.name}">
//         </div>
//         <div class="tarjeta_texto">
//         <h3 class="tarjeta_titulo">Name:${el.name}</h3>
//         <p class="tarjeta_text">Total Quizzes:${el.totalQuizzes}</p>
//         <p class="tarjeta_texto">User:${el.users}</p>
//         <a class="anchor_card"href="https://es.larnu.com/" target="_blank" class="btn">Go to LarnU</a>
//         </div>`
//         $fragment.appendChild(div)
//     });
//     $fetchAPI.appendChild($fragment)
//     })
// }

// axiosApi();
const tarjetasLarnU=async()=>{
    try {
        let res = await axios.get(url)
        return res.data.communityCategories;
        
    } catch (err) {
        cl(err);
    }
}
const mostrarCards = async()=>{
    const data = await tarjetasLarnU()

    data.forEach((el) => {
        const div = document.createElement("div");
        div.classList.add("tarjeta")
        div.innerHTML+=`
        <div class="tarjeta_imagen">
        <img class="tarjetaimagen_background"src="${el.background || "https://storage.googleapis.com/bucket-larnu/media/business/184/images/T721S8XV.png"}">
        <img class="tarjeta_imagen_icono" src="${el.icon}" alt="${el.name}">
        </div>
        <div class="tarjeta_texto">
        <h3 class="tarjeta_titulo">Name:${el.name}</h3>
        <p class="tarjeta_texto">Total Quizzes:${el.totalQuizzes}</p>
        <p class="tarjeta_texto">User:${el.users}</p>
        <a class="anchor_card"href="https://es.larnu.com/" target="_blank" class="btn">Go to LarnU</a>
        </div>`
        $fragment.appendChild(div);
    });
    $contenedor.appendChild($fragment);
}
mostrarCards()