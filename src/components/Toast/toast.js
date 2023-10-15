import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";

import "react-toastify/dist/ReactToastify.css";

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const ToastAction = ({
    clickSuccess,
    successMsg
}) => {
  const notifySuccess = () =>
    toast.success("Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
        background: "#1ab394 !important"
      })
    });

  const notifyError = () => {
    toast.error("Wow serious error!", {
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
  };

  const notifyWarn = () => {
    toast.warn("Wow a minor warning!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
        background: "#f8ac59 !important"
      })
      // progressClassName: css({
      //   background:
      //     "repeating-radial-gradient(circle at center, red 0, blue, green 30px)"
      // })
    });
  };

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default ToastAction;
