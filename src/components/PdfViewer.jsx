import React from "react";

const PdfViewer = () => {
  const openPdfInNewTab = () => {
    // Replace 'your-pdf-file.pdf' with the actual file path or URL of your PDF
    const pdfUrl = "/Pall_cv.pdf";
    
    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
  };

  return (
    <div>
      <button onClick={openPdfInNewTab}>Open Resume in a new tab</button>
    </div>
  );
};

export default PdfViewer;
