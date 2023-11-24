import React from "react";
import CsvSvg from "../../svg-component/csvSvg";
import PdfSvg from "../../svg-component/pdfSvg";
import ExcelSvg from "../../svg-component/excelSvg";

const FileFormatData = () => {
  return [
    {
      name: "PDF",
      img: <PdfSvg />,
    },
    {
      name: "CSV",
      img: <CsvSvg />,
    },
    {
      name: "Excel",
      img: <ExcelSvg />,
    },
  ];
};

export default FileFormatData;
