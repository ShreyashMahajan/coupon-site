import React, {  useState , useEffect} from "react";

// import "./App.css";

import { scanFile } from "@openhealthnz-credentials/pdf-image-qr-scanner";
import ImageUploader from "./qrUploader";
import { fakeQrValidator } from "./qrCodeHelper";

function QrCodeUploader() {
	const [resultText, setResultText] = useState("");

	async function processFile(selectedFile) {
		setResultText("");
		try {
			const qrCode = await scanFile(selectedFile);
			
			// It returns null if no QR code is found
			setResultText(qrCode || "No QR code found");
		} catch (e) {
			// Example Error Handling
			if (e?.name === "InvalidPDFException") {
				setResultText("Invalid PDF");
			} else if (e instanceof Event) {
				setResultText("Invalid Image");
			} else {
				console.log(e);
				setResultText("Unknown error");
			}
		}
	}

	const onHandleError = (err) => {
		setResultText(err.error)
	}



	return (
		<>
			<ImageUploader
				onFileSelectError={
					onHandleError
				}
				onFileSelectSuccess={(file) => {
					processFile(file);
				}}
				resultText={resultText}
			/>
		</>
	);
}

export default QrCodeUploader;