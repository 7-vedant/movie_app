import React from "react";

const Dropdown = ({ title, options, func }) => {
  return (
    <div>
      <select className="rounded px-2 py-1 text-white bg-zinc-600 border-none outline-none" onChange={func} defaultValue="0" name="format" id="format">
        <option value="0" disabled>
            {title}
        </option>
        {options.map((d,i)=>(
            <option key={i} value={d}>
                {d.toUpperCase()}
            </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
