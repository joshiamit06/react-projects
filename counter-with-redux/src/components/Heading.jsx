import {useSelector} from 'react-redux'


const Heading = ()=>{
    const counter = useSelector((store)=>store.counter)

    return <h1 class="display-6">Counter Value is : {counter} </h1>
}

export default Heading