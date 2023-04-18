import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { GifLogo } from "./components/GifLogo";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]); //utilizamos el operador spreed para copiar el arreglo
  };

  return (
    <div>
      <GifLogo/>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      <div className="container-body">
        {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      </div>
      
    </div>
  );
};
