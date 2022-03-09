import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideError} from '../../services/redux/actions/errors';

const ErrorNotification = (props) => {
 const isOpen = useSelector(state => state.isOpen);
 const error = useSelector(state => state.error);

 const dispatch = useDispatch();

 const handleClose = () => {
  dispatch(hideError());
 }
 
 return (
  <>
    {isOpen && error && (
      <div class="fancy-error-class">
        <button onClick={handleClose}>Close Error</button>
        <span>{error}</span>
      </div>
    )}
  </>
 )
}

export default ErrorNotification;