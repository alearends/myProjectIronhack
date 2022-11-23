

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const imageOne = data.drinks[0].strImageSource;

    // const descriptionOne
    // const imageTwo
    //sustitir innerhtml o el innetext de cada article
    // por la data que recibimos de la api
  });


  