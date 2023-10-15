import { qrCodeValidateResponse } from "./qrCodeUploader.general";

const getValueByKey = (ItemList, currentKey) => {
    const itemByKey = ItemList.find( item => item.key === currentKey );
    return itemByKey
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const fakeQrValidator = (errorMessage,shouldReject) => {
    return new Promise( (res, reject) => {
        setTimeout( () => {
            if(shouldReject){
                reject(`error from server ${errorMessage}`)
            }
            const messageToDisplay = randomInteger(0,2)
             console.log('messageToDisplay',messageToDisplay)
            const messageResponse = getValueByKey(qrCodeValidateResponse,messageToDisplay) 
            res(messageResponse)
        } , 3000)
    } )
}

const toastMessageDisplay = (type, message, toast, css) => {
    console.log('message',message)
  if(type === 'success'){
     return  toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: css({
          background: "#1ab394 !important"
        })
      })
  }
  else if( type === 'error'){
   return toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: css({
          background: "#ed5565 !important"
        })
      });
  }
  else {
    return toast.warn(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: css({
          background: "#f8ac59 !important"
        })
      });
  }
}


export { fakeQrValidator , toastMessageDisplay }