import { getGifs, getGifsCategory } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => {

    test('debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch')
        // console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0) //es para saber que sea mayor a cero
        expect(gifs[0]).toEqual({
            id: expect.any(String), //espera cualquier string, si espero otra cosa lo cambio
            title: expect.any(String),
            url: expect.any(String)
        })

    })


})

describe('Pruebas en getGifsCategory', () => {

    test('debe de retornar un arreglo de name gifs ', async() => {

        const namesGifs = await getGifsCategory('Actions')
        expect(namesGifs.length).toBeGreaterThan(0)
        expect(namesGifs[0]).toEqual({
            name: expect.any(String)
        })

    })


})
