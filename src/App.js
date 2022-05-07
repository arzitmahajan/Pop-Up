import React,{useState} from 'react';
import './App.css';
import CourseInput from './CourseInput/CourseInput';
import CourseGoal from './CourseGoal/CourseGoal';
import ErrorModel from './UI/ErrorModel';
function App() {
  const [DataGoals,setDataGoal] = useState([
    {username:'Max',age:31,id:''}
  ]);
  const[error,setError] = useState('');
  const addDataHandler = (enteredData,enteredDataAge)=>{
    if(enteredData.trim().length===0||enteredData.trim().length===0){
      setError({
        title:'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if(enteredDataAge<0){
      setError({
        title:'Invalid age',
        message: 'Please enter a valid  age (greater than zero).'
      });
      return;
    }
    setDataGoal(prevGoals=>{
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({username:enteredData,age:enteredDataAge,id:Math.random().toString()});
      console.log(updatedGoals);
      return updatedGoals;
    });
  }
  let content = (
    <p style={{textAlign:'center'}}>NO DATA AVAILABLE!</p>
  );
  if(DataGoals.length>0){
    console.log(DataGoals);
    content = (
      <CourseGoal items = {DataGoals}/>
    );
  }
  const errorHandler = ()=>{
    setError(null);
  }
  //component for error msg  
  return (
    <>
      {error&&<ErrorModel title ={error.title} message = {error.message} onError = {errorHandler} ></ErrorModel>}
      <section id = "goals">
        <CourseInput  onAddGoal={addDataHandler}>
        </CourseInput>
      </section>
      <section id ="goals-list">
        {content}
      </section>
    </>
  );
}
export default App;
