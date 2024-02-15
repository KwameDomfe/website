import { Link } from "react-router-dom"

function MinToGod() {
    return (
        <div className = "tc"
        >
            <h1 className="mb4-00"
            >
                Ministry to God Section
            </h1>

            <Link to="ministry-to-god"
                className="pv0-50 ph1-00 
                    black-90 
                    ba br0-25"
            >
                Explore More
            </Link>
        </div>
    )
}

export default MinToGod
