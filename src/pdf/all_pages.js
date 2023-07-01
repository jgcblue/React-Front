
import { useState } from "react";
import { Document, Page } from "react-pdf";
import './pdfCss.css';

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document style={{margin:"auto"}}
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page style={{margin:"auto"}} key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}
