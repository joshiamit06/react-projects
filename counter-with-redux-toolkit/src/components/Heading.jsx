import {useSelector} from 'react-redux'


const Heading = ()=>{
    const {counterVal} = useSelector((store)=>store.counter)

    return <h1 className="display-6">Counter Value is : {counterVal} </h1>
}

export default Heading