import React, { useState } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import { SpreadsheetComponent } from "@syncfusion/ej2-react-spreadsheet";
import "./SpreadSheet.css";
import { registerLicense } from "@syncfusion/ej2-base";

const SpreadSheet = () => {
  return (
    <>
      <SpreadsheetComponent></SpreadsheetComponent>
    </>
  );
};

export default SpreadSheet;
