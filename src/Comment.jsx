import React from 'react';

export default function Comment ({comment}) {
    const { user, text } = comment;

    return (
        <li>
            <div>
                <strong>{user}</strong>
            </div>
            <div>{text}</div>
        </li>
    );
}
