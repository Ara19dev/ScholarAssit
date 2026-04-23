import { Document, Page } from "react-pdf";
import { useState } from "react";

function PaperViewer({ file }) {

  const [numPages, setNumPages] = useState(null);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (!file) {
    return (
      <div className="flex items-center justify-center h-full text-textSecondary">
        Upload a research paper to begin.
      </div>
    );
  }

  return (
    <div className="overflow-auto h-full p-4">

      <Document file={file} onLoadSuccess={onLoadSuccess}>

        {Array.from(new Array(numPages), (el, index) => (
          <Page key={index} pageNumber={index + 1} />
        ))}

      </Document>

    </div>
  );
}

export default PaperViewer;