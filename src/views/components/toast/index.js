import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccess = () =>
  toast('Animated Box Was Clicked', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });