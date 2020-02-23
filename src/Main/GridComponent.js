import React from "react";
import RichTextComponent from "./RichTextComponent";
export default function GridComponent(props) {
  return (
    <div className="row">
      {props.block.components.map(block => {
        return React.createElement(RichTextComponent, {
          block: block,
          key: block.metadata.title
        });
      })}
    </div>
  );
}
