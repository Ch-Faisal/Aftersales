import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import "toastr/build/toastr.min.css"; // Import toastr CSS
import toastr from "toastr";
function Print() {
  // const printUrl = useSelector(state => state.printurl);
  const savedPrintUrl = localStorage.getItem('printUrl');
  useEffect(() => {
    // Simulate Ctrl+P key press to open print dialog
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key === 'p') {
        event.preventDefault(); // Prevent default browser print dialog
        window.print(); // Open print dialog
      }
    });
    window.print();
  }, []);



  return (
    <embed id="pdfEmbed" src={savedPrintUrl} type="application/pdf" width="100%" height="600px" />
  );
}

export default Print;
