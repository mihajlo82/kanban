import Avatar from "react-avatar";
import { AvatarType } from "../../../types/cardSectionType";
import { formatDate } from "../../../utils/date/date_format";

const Avatars = ({ start_on, due_on, assigneeAppended }: AvatarType) => {
  return (
    <div className="w-full flex justify-between items-center mt-3">
      <h6 className="font-bold text-sm"> {formatDate(start_on, due_on)}</h6>

      <div className="overflow-auto max-w-[120px]">
        <div className="flex -space-x-2">
          {!!assigneeAppended?.length &&
            assigneeAppended.map((user) => (
              <Avatar
                key={user.id}
                src={user.avatar_url}
                name={user.name}
                size="25"
                round={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Avatars;
