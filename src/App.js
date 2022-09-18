import React from "react";
import { Route, Routes } from "react-router-dom";
import Accordion from "./components/Accordion";
import Datatable from "./components/Datatable";
import TextEditor from "./components/TextEditor";
import ExportCsv from "./components/ExportCsv";
import Slider from "./components/ImageSlider/Slider";
import TableComp from "./components/TableComp";
import CkEditor from "./components/CkEditor";
import ReactStrapModal from "./components/ReactStrapModal";
import Csv from "./components/Csv";
import Checkbox from "./components/Checkbox";
import Video from "./components/Video";
import VideoTrimmer from "./components/VideoTrimmer";
import ForgotPassword from "./components/ForgotPassword";
import ReactPaginate from "react-paginate";
import Portal from "./components/Portal";
import SpreadSheet from "./components/SpreadSheet";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Video />} />
      <Route path="/datatable" element={<Datatable />} />
      <Route path="/table" element={<TableComp />} />
      <Route path="/export" element={<ExportCsv />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/image" element={<Slider />} />
      <Route path="/editor" element={<TextEditor />} />
      <Route path="/ck" element={<CkEditor />} />
      <Route path="/reactstrap" element={<ReactStrapModal />} />
      <Route path="/csv" element={<Csv />} />
      <Route path="/checkbox" element={<Checkbox />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/paginate" element={<ReactPaginate />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/video" element={<VideoTrimmer />} />
      <Route path="/spreadsheet" element={<SpreadSheet />} />
    </Routes>
  );
};

export default App;
