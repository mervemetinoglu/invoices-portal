import {toast} from 'react-toastify';

const displayToastMessage = (message) => {
  toast.error(message, {
    position: 'top-right',
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    closeButton: false,
  });
};

export default displayToastMessage;
