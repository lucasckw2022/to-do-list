import React from 'react'
import PropTypes from 'prop-types'
import TodoItems from './todoItems'
import { addTodoItem, deleteTodoItem } from '../actions'
import { connect } from 'react-redux'
import { Row, Input, Button, Collection, Modal } from 'react-materialize'

const mapStateToProps = state => ({
    todoList: state.todoList
})

class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            dueDate: ''
        }
    }
    componentDidMount(){
        $( ".collection" ).sortable()
    }
    render(){
        const { text, dueDate } = this.state
        const { dispatch, todoList } = this.props
        return (
            <div className="container">
                <Modal trigger={<Button>Add Item</Button>}>
                    <form id="todo" onSubmit={e => {
                        e.preventDefault()
                        if(text && dueDate){
                            dispatch(addTodoItem(text, dueDate))
                            this.setState({text:'', dueDate: ''})
                        }
                    }}>
                        <Row>
                            <Input s={6} value={dueDate} name='dueDate' type='date' onChange={function(e, value) {
                                this.setState({dueDate: e.target.value})
                            }.bind(this)} label="Due Date"/>
                            <Input s={12} value={text} name="text" type="textarea" onChange={function(e, value) {
                                this.setState({text: e.target.value})
                            }.bind(this)} label="Content" />
                        </Row>
                        <Button waves='light' type="submit">Submit</Button >
                    </form>
                </Modal>
                {todoList.length > 0 && <Collection>
                    {todoList.map(item =>
                    <TodoItems
                        key={item.id}
                        onClick={()=>dispatch(deleteTodoItem(item.id))}
                        {...item}
                    />
                    )}
                </Collection>}
            </div>
        )
    }
}

TodoList.propTypes = {}

export default connect(mapStateToProps)(TodoList)