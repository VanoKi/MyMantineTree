import type { Category } from "./CategoryTree.tsx";

interface Props {
  selected: Category | null;
}

export const CategoryForm  = ({ selected }) => {
  if (!selected) return <div>Выберите категорию</div>;

  return (
    <div style={{ padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Редактирование категории</h2>

      <label>
        Название:
        <input
          type="text"
          defaultValue={selected.name}
          style={{ marginLeft: 8 }}
        />
      </label>

      <div style={{ marginTop: 16 }}>
        <button>Сохранить</button>
      </div>
    </div>
  );
};
