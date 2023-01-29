import { OpenSubTaskSVGProp } from "../../../types/cardSectionType";
import { CommentCountSVGDefaultProp } from "../../../types/defaultProps/defaultProps";

const CommentCountSVG = ({ comments_count }: OpenSubTaskSVGProp) => {
  return (
    <div className="relative flex items-center ml-4">
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <g fill="#8E8E8E">
            <g>
              <path d="M12 2v8H3.998L1 12V2h11Zm-1 1H2v7.13L3.695 9H11V3ZM6 6v1H3V6h3Zm4-2v1H3V4h7Z" />
            </g>
          </g>
        </g>
      </svg>
      <span className="ml-1 leading-none">{comments_count}</span>
    </div>
  );
};

export default CommentCountSVG;
CommentCountSVG.defaultProps = CommentCountSVGDefaultProp;
