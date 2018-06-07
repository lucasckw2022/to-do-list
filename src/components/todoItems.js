import React from 'react'
import PropTypes from 'prop-types'
import { CollectionItem, Button  } from 'react-materialize'

const todoItem = ({ onClick, text, dueDate }) => (
  <CollectionItem>
    <p>{text}</p>
    <p>{dueDate}</p>
    <Button onClick={onClick}>Delete</Button>
    <Button>Edit</Button>
  </CollectionItem>
)

todoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired
}

export default todoItem