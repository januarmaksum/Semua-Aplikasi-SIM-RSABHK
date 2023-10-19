/* eslint-disable react/prop-types */
import { FiArrowUpRight } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";

export default function Card(props) {
  const { title, onClick, icon } = props;

  return (
    <div className="card cursor-pointer" onClick={onClick}>
      <div className="text-[#047759] text-[40px] mb-2 icons">
        {icon || <MdMedicalServices />}
      </div>
      <h3>{title}</h3>
      <div className="go-corner" onClick={onClick}>
        <div className="go-arrow">
          <FiArrowUpRight />
        </div>
      </div>
    </div>
  );
}
