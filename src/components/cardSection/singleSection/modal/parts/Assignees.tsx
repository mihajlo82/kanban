import { allUsers } from "../../../../../service/get_data";
import { AssingeesDefaultProp } from "../../../../../types/defaultProps/defaultProps";

const Assignees = ({ dispatchCustomReducer }: any) => {
  const addAssignes = (assignee: any) =>
    dispatchCustomReducer({ type: "ADD_ASSIGNEES", assignee: assignee });

  return (
    <div className="flex flex-col items-start">
      <p className="font-bold">Assignees:</p>
      <ul className="mt-2 max-h-[110px] overflow-auto">
        {allUsers.map((user) => {
          return (
            <li
              className="flex cursor-pointer"
              key={user.id}
              onClick={() => addAssignes(user)}
            >
              <img
                className="h-[20px] w-[20px] rounded-full"
                src={user.avatar_url}
                alt={user.name}
              />
              <p className="ml-2">{user.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Assignees;
Assignees.defaultProps = AssingeesDefaultProp;
