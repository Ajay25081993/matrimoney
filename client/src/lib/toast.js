import { Bounce, toast } from "react-toastify";

export const showSuccessToast = (message, navigateTo, pageUrl="") => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    onClose: () => {  
      if (pageUrl==="") {
       return
      }
      else  navigateTo(pageUrl)
    },
  });
};
export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
