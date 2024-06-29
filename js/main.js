const apiKey = "LbSB5LtJtC2OJev3E1fmUOtyaqfucypI";
let term = document.getElementById("entrada");
let boton = document.getElementById("buscar");

const giphyFetch = (entrada) => {
    return fetch(`
https://api.giphy.com/v1/gifs/search
?api_key=${apiKey}
&q=${entrada}
&limit=10
&offset=0
&rating=g
&lang=es
&bundle=messaging_non_clips`);
}

boton.addEventListener("click", () => {
    term = term.value;
    giphyFetch(term)
    
    .then((response) => {
        return response.json();
    })
    
    .then((results) => {
        results.data.forEach((element) => {
          let imagen = document.createElement("img");
          imagen.setAttribute("src", element.images.original.url);
          document.body.appendChild(imagen);
        });
    })

    .catch((error) => {
        console.error(error.message);
      });
  });