import React from 'react';

export default function Comment ({comment}) {
    const { user, text } = comment;

    return (
        <li>
            <h4>{user}</h4>
            <p>{text}</p>
        </li>
    );
}
