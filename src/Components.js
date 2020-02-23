import React from "react";
import GalleryComponent from "./Main/GalleryComponent/GalleryComponent";
import GridComponent from "./Main/GridComponent";
const Components = {
  GalleryComponent,
  GridComponent
};

export default block => {
  console.log(block);
  if (typeof Components[block.type] !== "undefined") {
    return React.createElement(Components[block.type], {
      key: block.type,
      block: block.metadata
    });
  }
};
