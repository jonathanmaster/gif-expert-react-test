import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"



// Describir el conjunto de pruebas que se van a realizar.
describe('Pruebas en el hook useFetchGifs', () => {

    // Prueba para comprobar que se regresa el estado inicial.
    test('debe de regresar el estado inicial', () => {

        // Obtener el resultado del hook useFetchGifs con la categoría "One Puch".
        const {result} = renderHook(()=> useFetchGifs('One Puch'))
        // Obtener los valores de estado del resultado.
        const {images, isLoading} = result.current

        // Comprobar que el arreglo de imágenes está vacío y que isLoading es verdadero.
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()

    })

    // Prueba para comprobar que se retorna un arreglo de imágenes y que isLoading es falso.
    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {

        // Obtener el resultado del hook useFetchGifs con la categoría "One Puch".
        const {result} = renderHook(()=> useFetchGifs('One Puch'))

        // Esperar a que se carguen las imágenes.
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0) 
        )

        // Obtener los valores de estado del resultado.
        const {images, isLoading} = result.current

        // Comprobar que el arreglo de imágenes no está vacío y que isLoading es falso.
        expect(images.length).toBeGreaterThan(0) //sea más grande que cero
        expect(isLoading).toBeFalsy()

    })
})


