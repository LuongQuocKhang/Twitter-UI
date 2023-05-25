import { format } from 'date-fns';
import Button from '../forms/Button';

interface UserBioProps {
    userId: string
}
const UserBio: React.FC<UserBioProps> = ({
    userId
}) => {
    return ( <>
        <div className='border-b-[1px] border-neutral-800 pb-4'>
            <div className='flex justify-end p-2'>
                <Button secondary label='Follow' onClick={() => {}} />
            </div>
        </div>
    </> );
}
 
export default UserBio;