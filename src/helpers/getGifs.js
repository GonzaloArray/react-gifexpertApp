// Los helpers son funciones que hacen un cierto trabajo en especifico, pueden recibir argumento lo procesan y devuelven un return


const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=b47VPZRc8XUNsZpBTlWBI00yFZYmgjOI`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}

export default getGifs;