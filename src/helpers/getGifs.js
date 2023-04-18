

export const getGifs = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=xZJEMxdV7puvJ8hoz534hrTRUFbPQCX7&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}


export const getGifsCategory = async()=> {

    const url = `https://api.giphy.com/v1/gifs/categories?api_key=xZJEMxdV7puvJ8hoz534hrTRUFbPQCX7&q`
    const resp = await fetch(url)
    const {data} = await resp.json()
    
    const dataCategory = data.map(cat =>({
        name: cat.name
    }))

    return dataCategory

}

