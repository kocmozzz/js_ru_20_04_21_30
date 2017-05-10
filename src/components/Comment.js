import React from 'react'
import PropTypes from 'prop-types'

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
  }).isRequired
}

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    )
}

export default Comment
