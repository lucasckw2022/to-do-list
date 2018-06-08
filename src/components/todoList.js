import React from 'react'
import PropTypes from 'prop-types'
import TodoItems from './todoItems'
import { addTodoItem, deleteTodoItem, updateTodoItem, updateOrder, multipleDeleteTodoItem } from '../actions'
import { connect } from 'react-redux'
import { Row, Input, Button, Collection, Modal } from 'react-materialize'
import { persistor } from '../store/configureStore'

const mapStateToProps = state => ({
    todoList: state.todoList
})

class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            dueDate: '',
            isEdit: false
        }
    }
    componentDidMount(){
        let todoList = this.props.todoList,
            lastItemId = 0,
            newState = {nextItemId: 0}
        if(todoList && todoList.length > 0){
            todoList.map(item => {
                item.id >= lastItemId ? lastItemId = item.id : null
            })
            newState.nextItemId = lastItemId + 1
        }
        this.setState(newState)
        $( ".collection" ).sortable({
            stop: (event, ui)=>{
                // persistor.pause()
                this.props.dispatch(updateOrder(ui.item[0].id, $(ui.item[0]).index()))
            }
        })
    }
    render(){
        const { text, dueDate, isEdit, todoItemId, nextItemId } = this.state
        const { dispatch, todoList } = this.props
        const editTodoItem = itemId => {
            let todoItem = todoList.filter(item => item.id == itemId)[0],
                text = todoItem.text,
                dueDate = todoItem.dueDate,
                todoItemId = todoItem.id
            this.setState({text, dueDate, isEdit: true, todoItemId})
            $('#todo-form').modal('open')
        }
        return (
            <div className="container">
                <Button onClick={() => {
                    this.setState({text:'', dueDate: ''})
                    $('#todo-form').modal('open')
                }}>Add Item</Button>
                <Modal id="delete-multiple"
                        trigger={<Button>Delete Multiple</Button>}>
                    <form id="todo" onSubmit={e => {
                        e.preventDefault()
                        let removeIds = $.map($(':checked'), item=>item.value)
                        dispatch(multipleDeleteTodoItem(removeIds.map(Number)))
                    }}>
                        <Row>
                        {todoList.length > 0 && todoList.map(item =>
                            <Input key={item.id} name={item.id.toString()} type='checkbox' value={item.id.toString()} label={item.text} />
                        )}
                        </Row>
                        <Button waves='light' type="submit">Submit</Button >
                    </form>
                </Modal>
                <Modal id="todo-form">
                    <form id="todo" onSubmit={e => {
                        e.preventDefault()
                        let clearFormDate = {text:'', dueDate: '', isEdit: false}
                        if(text && dueDate){
                            if(isEdit){
                                dispatch(updateTodoItem(todoItemId, text, dueDate))
                            } else {
                                dispatch(addTodoItem(nextItemId, text, dueDate))
                                clearFormDate.nextItemId = nextItemId + 1
                            }
                            this.setState(clearFormDate)
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
                        itemId={item.id}
                        onClick={()=>dispatch(deleteTodoItem(item.id))}
                        edit={()=>editTodoItem(item.id)}
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