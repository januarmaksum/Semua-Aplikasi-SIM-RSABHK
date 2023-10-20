import PropTypes from "prop-types";
import { FiArrowUpRight } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";

export default function Card({ title, onClick, icon }) {
  return (
    <div className="card cursor-pointer" onClick={onClick}>
      <div className="text-[#047759] text-[40px] mb-2 icons">{icon}</div>
      <h3>{title}</h3>
      <div className="go-corner" onClick={onClick}>
        <div className="go-arrow">
          <FiArrowUpRight />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

Card.defaultProp = {
  title: "Title",
  icon: <MdMedicalServices />,
  onClick: undefined,
};
