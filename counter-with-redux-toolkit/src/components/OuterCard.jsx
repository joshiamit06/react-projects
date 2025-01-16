const OuterCard = ({children})=>{
    return <div className="card" style={{width: "30rem", height:"20rem"}}>
    <div className="card-body">{children}
    </div>
  </div>
}

export default OuterCard