/* eslint-disable react/prop-types */
import { FiArrowUpRight } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";

export default function Card(props) {
  const { title, onClick, icon } = props;

  return (
    <div className="card cursor-pointer" onClick={onClick}>
        <div className="text-[#047759] text-[40px] mb-2 icons">
            {icon ? icon : <MdMedicalServices />}
        </div>
      <h3>{title}</h3>
      {/* <p className="bg-orange-400 rounded-[3px] px-2 py-1 inline-flex text-white text-sm">
        {category}
      </p> */}
      <div className="go-corner" onClick={onClick}>
        <div className="go-arrow">
          <FiArrowUpRight />
        </div>
      </div>
    </div>
  );
}
