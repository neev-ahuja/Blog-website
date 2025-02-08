import { Link } from "react-router-dom";

const icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  );
};

const Header = () => {
  return (
    <header>
      <Link to='/'><h1><span>BLOG</span>SPOT</h1></Link>
      <ul>
        <li>About{icon()}
          <div className="dropdown-content">
            <Link to='/about-us'>About Us</Link>
            <Link to='/team'>Our Team</Link>
            <Link to='/history'>Our History</Link>
          </div>
        </li>
        <li>Ministries{icon()}
          <div className="dropdown-content">
            <Link to='/ministries/children'>Children</Link>
            <Link to='/ministries/youth'>Youth</Link>
            <Link to='/ministries/adults'>Adults</Link>
          </div>
        </li>
        <li>Next Steps{icon()}
          <div className="dropdown-content">
            <Link to='/next-steps/join'>Join Us</Link>
            <Link to='/next-steps/volunteer'>Volunteer</Link>
            <Link to='/next-steps/donate'>Donate</Link>
          </div>
        </li>
        <li>Donate{icon()}
          <div className="dropdown-content">
            <Link to='/donate/one-time'>One-Time Donation</Link>
            <Link to='/donate/monthly'>Monthly Donation</Link>
            <Link to='/donate/sponsor'>Sponsor a Program</Link>
          </div>
        </li>
      </ul>
      <Link to='/new-blog'><button>Write a Blog</button></Link>
    </header>
  );
};

export default Header;