import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../redux/clock/clockActions';

const Clock = () => {
  const dispatch = useDispatch();
  const currentTime = useSelector(state => state.clock.currentTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup
  }, [dispatch]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '2rem' }}>
      <h2>Current Time:</h2>
      <h1>{new Date(currentTime).toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
