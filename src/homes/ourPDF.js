

import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import bn from "./pdf/bone.pdf";
import cha from "./pdf/cha.pdf";
import AllPages from './pdf/all_pages';
import SinglePage from './pdf/single_page';
import '../You_styles.css';
import styled from 'styled-components';

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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function YouPDF() {
  return (
	  <Styles>
    <div >

      <h4>Single Page</h4>
      <SinglePage pdf={bn} />

      <hr />
      <h4>All Pages</h4>
      <div style={{margin:"auto"}} className="all-page-container">
        <AllPages pdf={cha} />
      </div>
      <hr />


      <hr />

      <hr />
    </div>
	  </Styles>
  );
}

export default YouPDF;
