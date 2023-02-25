import {useDispatch} from 'react-redux'

function Home() {
    const dispatch=useDispatch();
   // const {c}=useSelector(state=>state.custom);
    const addBtn=()=>{
        dispatch({
            type:"increment"
        })
    }
    const addBtn10=()=>{
        dispatch({
            type:"incrementByvalue",
            payload:10, 
        })
    }
    const subBtn=()=>{
        dispatch({
            type:"decrement"
        })
    }
  return (

    <div>
        {/* <h1>{c}</h1> */}
        <button onClick={addBtn}>Increment</button>
        <button onClick={addBtn10}>Increment by 10</button>
        <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

export default Home