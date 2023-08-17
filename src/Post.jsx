import { Avatar } from '@mui/material';
import React from 'react';
import './post.css'
import InputOptions from './InputOptions';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
const Post = () => {
    return (
        <div className="post">
            <div className="post-header">
                <Avatar />
                <div className="post-info">
                    <h2>Kaushik Kundu</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="post-body">
                <p>Hello</p>
            </div>
            <div className="post-buttons">
                <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
                <InputOptions Icon={ChatOutlined} title="Comment" color="gray" />
                <InputOptions Icon={ShareOutlined} title="Share" color="gray" />
                <InputOptions Icon={SendOutlined} title="Send" color="gray" />
            </div>
        </div>
      );
}
 
export default Post;