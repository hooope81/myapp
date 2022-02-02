
import {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toggleShowName} from '../store/profile/chatActions';

const Profile = () => {
   
    const {name, showName} = useSelector(state => state);
const dispatch = useDispatch();
    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
       
    }, [dispatch])
    
    return (
        <div>
         <h4>Profile</h4>
         <input 
           type="checkbox"
           checked={showName}
           value={showName}
           onChange={setShowName}
        />
        <span>Show Name</span>

        {showName && <div>{name}</div>}
        </div>
    );
};

export default Profile;