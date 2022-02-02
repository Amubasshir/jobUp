import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
    return (
        <Wrapper>
            <div>
                <img src={img} alt="not found" />
                <h3>Opps!!! Page not found</h3>
                <p>We can't find the page you're looking for...</p>
                <Link to='/'>Back Home</Link>
         </div>
      </Wrapper>
  )
};

export default Error;
