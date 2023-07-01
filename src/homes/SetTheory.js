
//ALL OF THIS IS FROM:
//https://codesandbox.io/s/displaying-pdf-using-react-forked-uqefw?file=/src/sampleBase64pdf.js

import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
//import SinglePagePDFViewer from "./components/pdf/single-page";
//import AllPagesPDFViewer from "./components/pdf/all-pages";
//import { sampleBase64pdf } from "./sampleBase64pdf";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
//import samplePDF from "./sample.pdf";
import bn from "./pdf/bone.pdf";
import cha from "./pdf/cha.pdf";
//import scheme from "./pdf/scheme.pdf"
import AllPages from './pdf/all_pages';
import SinglePage from './pdf/single_page';

//import {useLocation} from 'react-router-dom';
import "../You_styles.css";

import styled from 'styled-components';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Styles = styled.div`
h4 {
  text-align: left;
  margin-left: 40px;
}

hr {
  border-top: 2px dotted #3f51b5;
}

button {
  width:100%;
  background: #3f51b5;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px #ccc;
}

/* For pdf */
.react-pdf__Page {
  margin-top: 10px;
}
.react-pdf__Page__textContent {
  border: 1px solid darkgrey;
  box-shadow: 5px 5px 5px 1px #ccc;
  border-radius: 5px;
}

.react-pdf__Page__annotations.annotationLayer {
  padding: 20px;
  max-height:100px;
}

.react-pdf__Page__canvas {
  margin: 0 auto;
}

/* For all pages */
.all-page-container {
  height: 100%;
  max-height: 500px;
  overflow: auto;
}

*{
  margin: 0;
  padding: 0;
  color : white;
  
}

.pdf-container{
  width: 100%;
  height: 800px;
  background-color: #e4e4e4;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility:hidden;
}

.error-msg{
  width: 100%;
  color: red;
  font-size: 14px;
  font-weight: 600;
}`

export default function SetTheory() {
//	const locationNotProps= useLocation();
//	    console.log(`the locationNotProps value:`, locationNotProps)
  return (
	  <Styles>
    <div >

      <h4>Single Page</h4>
      <SinglePage pdf={bn} />

    </div>
	  </Styles>
  );
}
