
const NavBar = ({setCategory}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand hand-cursor" onClick={()=>setCategory("general")}><span className="badge bg-dark text-light">News</span></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <div className="nav-link hand-cursor" onClick={()=>setCategory("technology")}>Technology</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link hand-cursor" onClick={()=>setCategory("business")}>Business</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link hand-cursor" onClick={()=>setCategory("health")}>Health</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link hand-cursor" onClick={()=>setCategory("science")}>Science</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link hand-cursor" onClick={()=>setCategory("sports")}>Sports</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link hand-cursor" onClick={()=>setCategory("entertainment")}>Entertainment</div>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <style>
                {`
                .hand-cursor{
                    cursor:pointer;
                }
                `}
            </style>
        </>
        )
}

export default NavBar