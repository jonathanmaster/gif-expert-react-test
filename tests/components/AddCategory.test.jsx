import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"



describe('Pruebas en el componente <AddCategory/> ', () => {

    const inputValue = 'Saitama'


    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={()=>{}}/>)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target: {value:inputValue}})

        expect(input.value).toBe('Saitama')
        // screen.debug()
    })

    test('debe de llmar onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory}/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)
        //screen.debug() //miramos que queda vacio el value
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled() //sirve para ver si a sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1) //para saber si se llama una ves
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) //que haya sido llamado con el valor dado
    
    })

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        // expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled() //que no haya sido llamado

    })


})







