import { useState } from "react";

export type Category = {
  id: number;
  name: string;
  children: Category[];
}

interface Props {
  data: Category[];
  onSelect: (category: Category) => void;
}

export const CategoryTree = ({ data, onSelect }) => {
  return (
    <div>
      {data.map((cat) => (
        <TreeNode key={cat.id} node={cat} onSelect={onSelect} />
      ))}
    </div>
  );
};

const TreeNode: FC<{ node: Category; onSelect: (c: Category) => void }> = ({
                                                                             node,
                                                                             onSelect,
                                                                           }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginLeft: 16 }}>
      <div
        style={{ cursor: "pointer", fontWeight: 600 }}
        onClick={() => {
          onSelect(node);
          setOpen(!open);
        }}
      >
        {node.children.length > 0 ? (open ? "▼ " : "▶ ") : "• "}
        {node.name}
      </div>

      {open && node.children.length > 0 && (
        <div style={{ marginLeft: 16 }}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
};
