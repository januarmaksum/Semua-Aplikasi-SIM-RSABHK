/* eslint-disable react/prop-types */
import { FiArrowUpRight } from "react-icons/fi";

export default function Card(props) {
  const { link, title, category } = props;

  return (
    <a className="card" href={link}>
      <h3>{title}</h3>
      <p className="bg-orange-400 rounded-[3px] px-2 py-1 inline-flex text-white text-sm">
        {category}
      </p>
      <div className="go-corner" href={link}>
        <div className="go-arrow">
          <FiArrowUpRight />
        </div>
      </div>
    </a>
  );
}
