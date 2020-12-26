import React from 'react';
function ToDoItem(props)
{
  const [isDone,setIsDone]=React.useState(false)
  function handleClick()
  {
      setIsDone((prevValue)=>
      {
        return !isDone;
      });
      setTimeout((isDone)=>
      {
        props.taskDone(props.id);
        setIsDone(isDone);
      },2000);
  }

  return(
    <div onClick={handleClick} style={{cursor:"pointer"}}>
      <li style={{textDecoration: isDone?"line-through":"none"}}>{props.text}</li>
    </div>
  ); 
}

export default ToDoItem;