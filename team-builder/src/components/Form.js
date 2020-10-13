import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import Styled from 'styled-components'

const StyledForm = Styled.div`
    display: flex;
    flex-flow: column wrap;
    background-color: #e5e5e5;
    border: 1px solid red;
    padding: 2%;
    margin: 0 2%;
    
`

export default function Form(props) {
    const { teamList, formValues, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <h3>Join the Team: </h3>
            <StyledForm>
                <label>Name:  
                    <input 
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={formValues.name}
                        placeholder='type your name'
                    />
                </label>
                <label>Email: 
                    <input 
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={formValues.email}
                        placeholder='type your email'
                    />
                </label>
                <label>Role: 
                    <select 
                        name='role'
                        onChange={onChange}
                        value={formValues.role}
                    >
                        <option value=''>---Select Role---</option>
                        <option value='human'>Human</option>
                        <option value='dog'>Dog</option>
                        <option value='cyborg'>Cyborg</option>
                    </select>
                </label>
                <div className='submit'>
                    <button onClick={onSubmit} >submit</button>
                </div>
            </StyledForm>
        </form>
        
    )
}