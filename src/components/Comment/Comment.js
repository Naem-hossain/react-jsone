import React from 'react';
import "./Comment.css"
const Comment = (props) => {
    const { email, name, body } = props.data
    return (
        <div className='comment-section'>
            <h2>name: <span>{name}</span></h2>
            <p>email:- {email}</p>
            <p className='body'>Body: {body}</p>
        </div>
    );
};

export default Comment;