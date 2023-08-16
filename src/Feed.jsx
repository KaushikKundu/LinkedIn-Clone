import React from 'react';
// import CreateIcon from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import './feed.css'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form >
                        <input type="text" name="" id="" />
                        <button type="submit" value="" >Send</button>
                    </form>
                </div>
            </div>
        </div>
      );
}
 
export default Feed;
