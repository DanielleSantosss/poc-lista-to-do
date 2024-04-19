import { toast, Bounce } from 'react-toastify';

const Toast = ({message, type}) => {

    const configToast = {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce, 
    }

    const isError = type === 'error'
    const isSuccess = type === 'success'
    
    if(isError){
       return toast.error(message, configToast)
    }

    if(isSuccess){
       return  toast.success(message, configToast)
    }

}

export default Toast