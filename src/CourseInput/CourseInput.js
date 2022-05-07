import React,{useState} from 'react';
import './CourseInput.css';
const CourseInput = (props)=>{
    const [formData,setFormUserNameData] = useState('');
    const [formAge,setFormAgeData] = useState('');

    const setUsername = (event)=>{
        setFormUserNameData(event.target.value);
    }
    const setUserAge = (event)=>{
        setFormAgeData(event.target.value);
    }
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        setFormUserNameData('');
        setFormAgeData('');
        props.onAddGoal(formData,formAge);
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className='form-control'>
                <label>Username</label>
                <input value={formData} type ="text" onChange={setUsername} ></input>
                <label>Age(Years)</label>
                <input value={formAge} type ="number" onChange={setUserAge} ></input>
                <button type = "submit">Add User</button>
            </div>
        </form>
    );
}
export default CourseInput;