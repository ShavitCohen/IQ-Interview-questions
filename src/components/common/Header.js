import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import Authpanel from './Authpanel';

const Header = ({loading, loggedin}) => {

  return (
    <nav>
    <div className="nav-wrapper">
      <IndexLink to="/" activeClassName="active">Experience Repository</IndexLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><IndexLink to="/" activeClassName="active">Groups</IndexLink></li>
        <li><IndexLink to="AddCompany" activeClassName="active">Add New Company</IndexLink></li>
        <li><Authpanel/></li>
      </ul>
    </div>
  </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedin: PropTypes.bool.isRequired
};

export default Header;
