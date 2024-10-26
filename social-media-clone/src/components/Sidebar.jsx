function Sidebar({selectedTab, changeTab}){
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar" style={{width: "280px"}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            <span className="fs-4">Social Media</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item" onClick={changeTab}>
                <a href="#" className={`nav-link text-white ${selectedTab==="Home" && 'active'}`} aria-current="page">
                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home" ></use></svg>
                Home
                </a>
            </li>
            <li onClick={changeTab}>
                <a href="#" className={`nav-link text-white ${selectedTab==="Create Post" && 'active'}`}>
                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                Create Post
                </a>
            </li>
            </ul>
        </div>
    )
}

export default Sidebar