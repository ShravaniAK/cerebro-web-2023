// import DashboardCardWrapper from "./Wrapper/DashboardCardWrapper";
import './DashboardAboutCard.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Cerebro-logo.png';

function DashboardAboutCard({ name, instituteName, email, mobileNo }) {
  return (
    <div className="dashboard-about-card">
      <div className="dashboard-about-card__logo">
        <img src={logo} alt="" />
      </div>
      <div className="dashboard-about-card__row">
        <div className="dashboard-about-card__row__title">Name</div>
        <div className="dashboard-about-card__row__value">{name}</div>
      </div>
      <div className="dashboard-about-card__row">
        <div className="dashboard-about-card__row__title">Institute</div>
        <div className="dashboard-about-card__row__value">{instituteName}</div>
      </div>
      <div className="dashboard-about-card__row">
        <div className="dashboard-about-card__row__title">Email</div>
        <div className="dashboard-about-card__row__value">{email}</div>
      </div>
      <div className="dashboard-about-card__row">
        <div className="dashboard-about-card__row__title">Contact No.</div>
        <div className="dashboard-about-card__row__value">{mobileNo}</div>
      </div>

      <div className="pass-reset-main">
        <Link to="/reset-password">
          <p className="pass-reset-text">Reset Password</p>
        </Link>
      </div>
    </div>
  );
}

export default DashboardAboutCard;
