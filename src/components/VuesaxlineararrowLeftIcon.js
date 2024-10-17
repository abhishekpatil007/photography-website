import PropTypes from "prop-types";

const VuesaxlineararrowLeftIcon = ({
  className = "",
  vuesaxlineararrowLeft,
}) => {
  return (
    <img
      className={`w-10 relative h-10 object-contain ${className}`}
      alt=""
      src={vuesaxlineararrowLeft}
    />
  );
};

VuesaxlineararrowLeftIcon.propTypes = {
  className: PropTypes.string,
  vuesaxlineararrowLeft: PropTypes.string,
};

export default VuesaxlineararrowLeftIcon;
