import React, {useState} from 'react';

const TodoForm = () => {

    const [text, setText] = useState("")

    const onFormSubmit = () => {

    }

    const OnInputChange = (e) => {
        setText(e.target.value)
    }
    return (
        <form className='form' onSubmit={onFormSubmit}>
            <input 
                placeholder='Enter new task'
                className='input'
                onChange={OnInputChange}
            />
        </form>
    );
}

export default TodoForm;