
    export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=pwXMTUEMC1kt9d0kbJb5h60zbbvf4JBO`; //Url obtenida de postman
        const resp = await fetch(url); // se almacena le fetch en una constante
        const { data } = await resp.json(); //se desestructura la data desde el objeto json que se crea en resp

        const gifs = data.map(img => { //se mapea la data para obtener los datos más importantes o los que necesito
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url //El "?" sirve para asegurarnos de que la respuesta nos devuelve una imagen
            }
        });

        return gifs;

    }