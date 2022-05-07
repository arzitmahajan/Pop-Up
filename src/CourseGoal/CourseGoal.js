import React from "react";
import './CourseGoal.css';
const CourseGoal = (props)=>{
    return (
        <ul>
            {props.items.map(list=>(
                //giving unique key in list

                <li key={list.id}>
                    {list.username} ({list.age} years old)
                </li>
            ))}
        </ul>
    );
};
export default CourseGoal;