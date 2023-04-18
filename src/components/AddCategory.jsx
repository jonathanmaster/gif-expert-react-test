import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    //La expresión inputValue.trim().length se refiere a la longitud del valor de la variable "inputValue" después de eliminar los espacios en blanco iniciales y finales utilizando el método trim().
    if (inputValue.trim().length <= 1) return;

    // setCategories(categories => [inputValue, ...categories])
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} aria-label="form" className="container-form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
