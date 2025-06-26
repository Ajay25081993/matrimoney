import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: 250,
    });

    scanner.render(
      (decodedText, decodedResult) => {
        console.log(`Code matched = ${decodedText}`);
        // You can parse and display card here
        alert(decodedText);
      },
      (errorMessage) => {
        console.warn(`QR Code no match: ${errorMessage}`);
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Scan QR Code</h1>
      <div id="reader" style={{ width: "300px" }}></div>
    </div>
  );
};

export default QRScanner;
