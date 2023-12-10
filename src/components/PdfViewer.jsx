import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";

const PdfViewer = () => {
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const openPdfInNewTab = () => {
    // Replace 'your-pdf-file.pdf' with the actual file path or URL of your PDF
    const pdfUrl = "/Pall_cv.pdf";
    
    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
  };

  return (
    <div>
        <button onClick={openPdfInNewTab}>
            View CV in a new tab
        </button>
    </div>
  );
};

export default PdfViewer;
