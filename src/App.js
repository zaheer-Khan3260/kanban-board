import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchAllData } from './Component/FetchData/FetchData';
import Navbar from './Component/Navbar/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';

import Loading from './Component/Loading/Loading';

function App() {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])


  return allTickets ?(
    <div>
      <Navbar/>
      
      <Dashboard/>
    </div>
  ) : <Loading/>
}

export default App;
