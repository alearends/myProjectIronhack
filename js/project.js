// Project Section con Fetch
url = "https://picsum.photos/v2/list";


const projectSectionBig = document.querySelector("#project-Container-Big2");

async function getProjectSectionBig(){
    const responseBig = await fetch(url);
    const photosBig = await responseBig.json();
    
    // console.log('LOCATION: ',window.location);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id');
    // console.log("El id es", id)
    console.log('RESPUESTA: ', photosBig[id]);

    // unimos API y window.location
    // photosBig.find((id) => {  a partir de aqui creo la tarjeta

        // Código para crear la tajeta-Big
        const articleBig = document.createElement("article");
        articleBig.className = "project-Sheet-Big";
    
        const tituloBig = document.createElement("h2");
        tituloBig.className = "project-Name-Big";
        tituloBig.textContent = photosBig[id].author;
        // tituloBig.textContent = "Title Article 1 (Simplify)";
    
        const divTop = document.createElement("div");
        divTop.className = "project-Info-Big";
    
        const keyWords = document.createElement("p");
        keyWords.className = "project-Short-Description-Big";
        keyWords.textContent = photosBig[id].url;
        // keyWords.textContent = "UI Design & App Development";

        const completedBig = document.createElement("p");
        completedBig.className = "project-Info-Date";
        completedBig.textContent = fecha();
        // completedBig.textContent = "June 22, 2021";

        const spanBig = document.createElement("span");
        spanBig.className = "colorBlack";
        spanBig.textContent = "Completed on:"; 

        const imageContainer = document.createElement("id");
        imageContainer.className = "container-Image-Big";

        const imgBig = document.createElement("img");
        imgBig.className = "project-Image-Big";
        imgBig.src = photosBig[id].download_url;

        const containerLargeText = document.createElement("div");
        containerLargeText.className = "container-Project-Text";

        const largeText = document.createElement("p");
        largeText.className = "project-Text";
        largeText.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consectetur perspiciatis sunt quos aspernatur, similique odit voluptate maiores nostrum pariatur nulla molestiae cupiditate repudiandae in et eaque expedita reprehenderit totam.";

        projectSectionBig.append(articleBig);

        articleBig.append(tituloBig, divTop, imageContainer, containerLargeText);
        divTop.append(keyWords, spanBig, completedBig);
        imageContainer.append(imgBig);
        containerLargeText.append(largeText);




}

function fecha() {
const month = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
let f = new Date();
const FechaFinal = (month[f.getMonth()] + " " + f.getDate() + ", " +  f.getFullYear());
return FechaFinal;
};


getProjectSectionBig()

const projectSection = document.querySelector("#project-Container-Big");

async function getProjectSection() {
    const response = await fetch(url);
    const photos = await response.json();
    photos.forEach((ph, i) => {
    if (i < 3) {
      // Código para crear la tajeta
        const article = document.createElement("article");
        article.className = "project-Sheet";

        const img = document.createElement("img");
        img.src = ph.download_url;
      // img.src = "./project-assets/projects-section/1.jpg"

        const div = document.createElement("div");
        div.className = "project-Info";

        const titulo = document.createElement("h3");
        titulo.className = "project-Name";
        titulo.textContent = ph.author;
      // titulo.textContent = "Title Article 1"

        const description = document.createElement("p");
        description.classNamen = "project-Short-Description";
        description.textContent =
        "UI Design & App Development. This is a brief description of this article, that shouldn't be longer 2 lines.";

        const learnMore = document.createElement("a");
        learnMore.className = "learn-More";
        learnMore.innerText = "Learn More";
        learnMore.setAttribute("href", `/project.html?id=${i}`);

        article.append(img, div);
        div.append(titulo, description, learnMore);

        projectSection.append(article);
    }
    });
}

getProjectSection();


// Respuesta de Call to Action Section
const emailJSindex = document.getElementById("email");
const errorJSindex = document.getElementById("error-Index");
errorJSindex.style.color = 'dark';


function subscribe(){
    console.log("enviando formulario");

    const errorMsgsIndex = [];

    if(emailJSindex.value === null || emailJSindex.value === "" || emailJSindex.value.length < 15){
    errorMsgsIndex.push('❌ Invalid email format.');
    }else{errorMsgsIndex.push('⚠️ Oops! Something went wrong while submitting the form.');};

    errorJSindex.innerHTML = errorMsgsIndex.join("<br>");

    return false;

}
