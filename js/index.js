// Project Section con Fetch
url = "https://picsum.photos/v2/list";

const projectSection = document.querySelector("#project-Container");

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


// Pasos:
// 1. buscas la URL de la API
// 2. creas funcion con async
//    2.1 creas constante para asignar fetch
//    2.2 creas constante para asignar respuesta
//    2.3 indicas lo que hara cada elemento de los datos rcibidos
//     2.3.1 creas diseño del elemento a sustituir en el html (DOM)
//     2.3.2 indicas en qué parte del DOM se añadirá con un id en html, y queryselector del id en JS
// 3. en este punto, ya se pueden ver todos los elementos (aqui se comprueba el foreach)
// 4. luego vas a tu URL y miras donde esta cada elemento que tu quieres traerte de la url
// 5. vas a tu función y sustituyes los datos hardcordeados por los del API (el.nombreElemEnURL)


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