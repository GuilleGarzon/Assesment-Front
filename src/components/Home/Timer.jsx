import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/Home.css';

const Timer = ({ link }) => {

  const temp = Math.round(Math.random() * 60);
  const [time, setTime] = useState(temp);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1 ), 1000);
      return () => clearInterval(timer);
    }, [time]);

  return (
    <aside className='aside'>
      <h5 className='aside__title'>{time} seconds</h5>
      {time > 0 && (
          <Link to={link}>
            <button type='button' className='aside__button'>Go to Detail</button>
          </Link>
        )
      }
    </aside>
  );
}

Timer.propTypes = {
  link: PropTypes.shape()
}

Timer.defaultProps = {
  link: PropTypes.string
}

export default Timer;

