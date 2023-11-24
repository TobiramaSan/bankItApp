import React from "react";
import "./fileFormat.css";
import FileFormatData from "../file-format-data/fileFormatData";

const FileFormat = ({ action }) => {
  return (
    <div className="file-format-cont">
      {FileFormatData().map((item, id) => {
        return (
          <div className="export-list" key={id}>
            <div class="img">{item?.img}</div>
            <p onClick={action}>{item?.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FileFormat;
