import styles from '../styles/MainComponent.module.css'
import React,{useReducer} from 'react'

//Create reducer 

const initialState =0;
const reducer =(state,action)=>{
switch (action){
    case 'increment':{
        return state + 1
    }
    case 'decrement':{
        return state - 1
    }
    case 'reset':{
        return initialState
    }
    default:{ 
        return state
    }
}
}


const MainComponent = () => {

    const [count, dispatch] = useReducer(reducer,initialState)

    return ( 
        
        <>
        <div className={styles.container}>
            <h1>React App</h1>
        </div>
        <div className={styles.grid}>
         <h3> Using reducer for state management</h3>
         <button onClick={()=>{dispatch('increment')}}>increment</button>
         <button onClick={()=>{dispatch('decrement')}}>decrement</button>
         <button onClick={() =>{dispatch('reset')}}>reset</button>
        <br></br>
        <br></br>
        <br></br>
        <h1>My counter {count}</h1>



    


        </div>

        </>
     );
}
 
export default MainComponent;