import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Luego, se utiliza jest.mock para simular el comportamiento del hook useFetchGifs. 
//Esto se hace para asegurarse de que el componente se pruebe de manera aislada y no tenga dependencias externas
jest.mock("../../src/hooks/useFetchGifs")

// Describir el conjunto de pruebas que se van a realizar.
describe("Pruebas en <GifGrid/>", () => {
  // Establecer una categoría de prueba.
  const category = "One Punch";

  // Prueba para comprobar si se muestra el mensaje de carga inicialmente.
  test("debe de mostrar el loading inicialmente", () => {
    // Establecer los valores iniciales del hook useFetchGifs.
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    // Renderizar el componente GifGrid.
    render(<GifGrid category={category} />);

    // Comprobar que el mensaje de carga y la categoría se muestran correctamente en la pantalla.
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  // Prueba para comprobar si se muestran los elementos cuando se cargan las imágenes.
  test("debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    
    // Establecer los valores del hook useFetchGifs cuando se cargan las imágenes.
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://OnePuch/Saitama.jpg",
      },
      {
        id: "CDE",
        title: "Lufi",
        url: "https://localhost/lufi.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    // Renderizar el componente GifGrid.
    render(<GifGrid category={category} />);

    // Comprobar que el número de imágenes mostradas es igual a la longitud de la matriz gifs.
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
