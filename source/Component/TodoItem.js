import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
    },

    span: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px'  
    },

    p: {
        marginTop: '0',
        marginBottom: '0',
        padding: '0 5px'
    },

    button: {
        cursor: 'pointer'
    }
}

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = [];

    if(todo.completed) {
        classes.push('done');
    }

    return (
        <li style={styles.li}>
            <span style={styles.span} className={classes.join(' ')}>
                <input type="checkbox" onChange={()=> onChange(todo.id)} checked={todo.completed}></input>
                <strong>{index + 1}</strong>
                <p style={styles.p}>{todo.title}</p>
            </span>
            <button style={styles.button} onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;