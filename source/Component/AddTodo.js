import React, {useState} from "react";
import PropTypes from 'prop-types';

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start'
    },

    input: {
        width: '100%' 
    },

    button : {
        cursor: 'pointer'
    }
}

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear:  () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault();

        if(input.value().trim())
        {
            onCreate(input.value());
            input.clear();
        }
    }

    return(
        <form onSubmit={submitHandler} style={styles.form}>
            <input {...input.bind} style={styles.input}></input>
            <button style={styles.button} type="submit">Remove</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
} 

export default AddTodo;