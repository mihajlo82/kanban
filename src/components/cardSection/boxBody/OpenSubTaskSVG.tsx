import React from "react";
import { OpenSubTaskSVGProp } from "../../../types/cardSectionType";
import { OpenSubtaskSVGdDefaultProp } from "../../../types/defaultProps/defaultProps";

const OpenSubTaskSVG = ({open_subtasks}: OpenSubTaskSVGProp) => {
  return (
    <div className="relative flex items-center ml-2">
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <g fill="#8E8E8E">
            <g>
              <path d="M2.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm8.5 0v1H5v-1h6ZM2.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM11 6v1H5V6h6ZM2.5 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM11 2v1H5V2h6Z" />
            </g>
          </g>
        </g>
      </svg>
      <span className="ml-1 leading-none">{open_subtasks}</span>
    </div>
  );
};

export default OpenSubTaskSVG;
OpenSubTaskSVG.defaultProps = OpenSubtaskSVGdDefaultProp;
