import React, { useEffect, useState } from 'react';
import "./Comments.css"
import Comment from '../Comment/Comment';

const Comments = () => {
    let [comments, setComments] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div>
            <div className="comments">
                {
                    comments.map(data => <Comment data={data} key={data.id}> </Comment>)
                }
            </div>

        </div>
    );
};

export default Comments;