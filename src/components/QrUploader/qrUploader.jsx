import React, { useEffect, useRef, useState } from "react";
import { Button , Spinner  } from "reactstrap";
import { fakeQrValidator, toastMessageDisplay } from "./qrCodeHelper";
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";




/**
 * ImageUploader Success callback.
 *
 * @callback onFileSelectSuccess
 * @param {File} file - The image file.
 */

/**
 * ImageUploader Error callback.
 *
 * @callback onFileSelectError
 * @param {object} error - Error Object.
 * @param {string} error.error - Error Message.
 */

/**
 * ImageUploader
 * @param {object} props ImageUploader Props.
 * @param {onFileSelectSuccess} props.onFileSelectSuccess Success Handler.
 * @param {onFileSelectError} props.onFileSelectError The email of the user.
 */
export default function ImageUploader({ onFileSelectSuccess, onFileSelectError , resultText }) {
	// MIME Types to allow for upload.
	const supportedFiles = ["application/pdf", "image/png", "image/jpeg"];
	// Splitting the end of the string to get the file extension is not the best way to do this.
	// Will break for MIME's like SVG 'image/svg+xml'.
	const supportedFileEnds = supportedFiles.map((file) => file.split("/")[1]).join(", ");

    const inputRef = useRef(null);


	const [fileName, setFileName] = useState();
	const [isFileError, setIsFileError] = useState(false);
	const  [loading, setLoading] = useState(false)
	
    
	useEffect(() => {
		if(!isFileError && fileName){
			setLoading(true)
      fakeQrValidator('error occured', false).then( response => {
		toastMessageDisplay(response.type, response.message, toast, css)

		setLoading(false)
	  } ).catch( (error) => {
	    setLoading(false)
	  } )
		}
	} ,[fileName,isFileError])

	

	/**
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} e
	 */
	const handleFileInput = (e) => {
		// Makes sure it's the correct file type.
		const file = e.target.files[0];
		if (supportedFiles.includes(file?.type)) {
			setFileName(file.name);
			onFileSelectSuccess(file);
			setIsFileError(false)
		} else {
			onFileSelectError({ error: "File must be a PDF/Image" });
			setIsFileError(true)
		}
	};

    const handleClick = () => {
        inputRef.current.click();
    }


	return (
		<>
			<h4 className="text-white">
				{fileName}
				{fileName === "" && `Supports: ${supportedFileEnds}`}
			</h4>

			<Button onClick={handleClick}>
				<input
					style={{ display: "none" }}
					type="file"
					onChange={handleFileInput}
					accept={supportedFiles.join(",")}
                    ref={inputRef}
				/>
				 {
					loading && 
					<Spinner size="sm" className="mr-1">
                  Loading...
                  </Spinner>
				 }
				 Upload
				
                </Button>
{
			!loading && 
			<p className="text-yellow">{isFileError ? resultText : fileName}</p>
}           <div>
      <ToastContainer />
    </div>
		</>
	);
}