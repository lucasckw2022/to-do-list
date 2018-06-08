import React from 'react'
import PropTypes from 'prop-types'
import { CollectionItem, Button  } from 'react-materialize'

class todoItem extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const { itemId, onClick, text, dueDate, edit } = this.props
    return (
      <CollectionItem id={itemId}>
        <p>{text}</p>
        <p>{dueDate}</p>
        <Button onClick={onClick}>Delete</Button>
        <Button onClick={edit}>Edit</Button>
      </CollectionItem>
    )
  }
}

todoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired
}

export default todoItem