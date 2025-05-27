import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../redux/Slices/clockSlice';

const Clock = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.clock.time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup
  }, [dispatch]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '2rem' }}>
      <h2>Current Time:</h2>
      <h1>{time || 'Loading...'}</h1>
    </div>
  );
};

export default Clock;
