// Project Section con Fetch
url = "https://picsum.photos/v2/list";

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
      learnMore.setAttribute("href", "/project.html");

      article.append(img, div);
      div.append(titulo, description, learnMore);

      projectSection.append(article);
    }
  });
}

getProjectSection();

async function getProjectSectionBig(){
    const responseBig = await fetch(url);
    const photosBig = await responseBig.json();
    photosBig


}