import { BoxBodyProp } from "../../../types/cardSectionType";
import { BoxBodyDefaultProp } from "../../../types/defaultProps/defaultProps";
import CommentCountSVG from "./CommentCountSVG";
import LabelList from "./LabelList";
import OpenSubTaskSVG from "./OpenSubTaskSVG";

const BoxBody = ({
  labelsAppended,
  comments_count,
  open_subtasks,
}: BoxBodyProp) => {
  return (
    <div className="flex items-center w-full mt-3 mb-1 text-xs font-medium text-gray-400">
      <LabelList labelsAppended={labelsAppended} />

      {open_subtasks > 0 && <OpenSubTaskSVG open_subtasks={open_subtasks} />}

      {comments_count > 0 && (
        <CommentCountSVG comments_count={comments_count} />
      )}
    </div>
  );
};

export default BoxBody;
BoxBody.defaultProps = BoxBodyDefaultProp;
