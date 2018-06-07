import React from 'react'
import PropTypes from 'prop-types'
import { CollectionItem, Button  } from 'react-materialize'

const todoItem = ({ onClick, text, dueDate, edit }) => (
  <CollectionItem>
    <p>{text}</p>
    <p>{dueDate}</p>
    <Button onClick={onClick}>Delete</Button>
    <Button onClick={edit}>Edit</Button>
  </CollectionItem>
)

todoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired
}

export default todoItem