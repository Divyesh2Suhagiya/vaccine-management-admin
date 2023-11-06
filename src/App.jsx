import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Components/Routing/Routing';
import Loader from './Components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { IoWarning } from 'react-icons/io5';
import { getChildDetail, getUserDetail, getVaccineDetail } from './Redux/Actions/UserAction';

function App() {
  const dispatch = useDispatch()
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    if(localStorage.getItem('islogin') &&isOnline ){
      dispatch(getUserDetail())
      dispatch(getChildDetail())
      dispatch(getVaccineDetail())
    }
  }, [])

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);
  
  return (
    <>
      {isOnline ? 
      <>
        <Loader />
      <Routing />
      </>
       :
       <>
        <div className='offline_div'>
          <IoWarning size={100} color='rgb(231, 190, 12)' />
          <h4 className='display-5 mb-4'>Check your Connection</h4>
          <p>You don't seem to have an active internet connection.</p>
          <p>Please check your connection and try again.</p>
        </div>
       </>
       }
    </>
  );
}

export default App;
