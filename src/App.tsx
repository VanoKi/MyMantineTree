import { useState } from "react";
import { categories } from "./data/categories";
import { CategoryTree, type Category } from "./components/CategoryTree";
import { CategoryForm } from "./components/CategoryForm";

export default function App() {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <div style={{ display: "flex", gap: 32, padding: 32 }}>

      <div style={{ flexGrow: 1 }}>
        <CategoryForm selected={selected} />
      </div>

      <div>
        <h2>Дерево категорий</h2>
        <CategoryTree data={categories} onSelect={setSelected} />
      </div>

    </div>
  );
}
