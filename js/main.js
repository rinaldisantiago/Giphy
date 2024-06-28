const apiKey = "vtoX8qe474bcBdVDhkw5vzX43E2BXwIm";
const term = "Guns N Roses";
const llamada = fetch(`
https://api.giphy.com/v1/gifs/search
?api_key=${apiKey}
&q=${term}
&limit=10
&offset=0
&rating=g
&lang=es
&bundle=messaging_non_clips`
);

llamada
    .then((response) => {
        return response.json();
    })
    .then((results) => {
        results.data.forEach(element => {
            let imagen = document.createElement("img");
            imagen.setAttribute("src", element.images.original.url);
            document.body.appendChild(imagen);
        });;
    })
    .catch((error) => {
        console.error(error.message);
    })