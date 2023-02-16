// ill delete this later and replace it with dependency injection




async function getAsJson(url)
{
    const data = await fetch(url);
    const json = await data.json();
    return json;
}

async function getAsJsons(urls) {
    let json = Promise.all( urls.map(u => fetch(u)) )
        .then( responses => Promise.all( responses.map(r => r.json() )) )
    return json;
}

export default getAsJson 
export default getAsJsons