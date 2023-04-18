import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en el componente <GifItem/>', () => {

    const title = 'Saitam'
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe de hacer match con el snapshot', () => {

        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url}/>)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)

    });

    // es sobre la etiqueta 'p'
    // test('debe de mostrar el titul en el componente', () => {

    //     render(<GifItem title={title} url={url}/>)
    //     expect(screen.getAllByText(title)).toBeTruthy()
    // })


})




