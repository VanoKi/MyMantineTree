import {Group, Tree} from '@mantine/core';
import { data } from '../data/categories.tsx';
import { IconChevronDown } from '@tabler/icons-react';

export function Demo() {
  return (
    <Tree
      data={data}
      style={{ width: 400, height: 500 }}
      levelOffset={23}
      renderNode={({ node, expanded, hasChildren, elementProps }) => (
        <Group gap={5} {...elementProps}>
          {hasChildren && (
            <IconChevronDown
              size={18}
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          )}

          <span>{node.label}</span>
        </Group>
      )}
    />
  );
}