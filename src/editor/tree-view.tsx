import * as React from "react";
import { observer } from "mobx-react-lite";

import type { TPage } from "../mst";
import { useDropNode } from "./use-drop-node";
import { TreeNode } from "./components/tree-node";
import { TreeLeaf } from "./components/tree-leaf";

interface TreeComponentProps {
  page: TPage;
}

export const TreeView = observer((props: TreeComponentProps) => {
  const { isOver, drop } = useDropNode({
    node: props.page,
    accept: ["new", "tree"],
  });

  return (
    <div ref={drop} className="tree" style={{ flex: "1", width: "100%" }}>
      <h4 style={{ paddingLeft: "8px" }}>{props.page.title}</h4>

      {props.page.children.map((node) =>
        node.leaf ? (
          <TreeLeaf key={node.id} model={node} />
        ) : (
          <TreeNode key={node.id} model={node} />
        )
      )}
    </div>
  );
});
