import PropTypes from 'prop-types';
import logo from "../assets/logo/logo.jpg"

function Logo({ width }) {
    return (
        <img
            className={width}
            src={logo}
            alt="Logo"
        />
    );
}

Logo.propTypes = {
    width: PropTypes.string.isRequired,
};

export default Logo;