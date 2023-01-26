import Avatar from 'react-avatar';
import { AvatarType } from '../../../types/cardSectionType';
import { formatDate } from '../../../utils/date/date_format';

const Avatars = ({start_on, due_on,assigneeAppended }:AvatarType) => {
   const dd = formatDate(start_on, due_on);
   console.log(dd)
  return (
    <div className="w-full flex justify-between items-center mt-3">
        <h6 className="font-bold text-sm">{dd}</h6>

        <div className="overflow-auto max-w-[120px]">
           <div className="flex -space-x-2">
            {assigneeAppended.map(user => <Avatar src={user.avatar_url} name={user.name} size="25" round={true} />)}
          </div> 
        </div>
    </div>
  )
}

export default Avatars