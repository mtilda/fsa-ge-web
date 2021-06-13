import { Link } from 'react-router-dom';

const Nav = ({ routes }) => (
  <nav>
    {routes
      .filter(({linkText}) => linkText)
      .map(({key, linkText, path}) => (
        <Link key={key} to={path}>{linkText}</Link>
      ))
    }
  </nav>
);

export default Nav;