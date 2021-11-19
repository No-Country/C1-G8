const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="bar">
                <div className="wrapper">
                    <div className="bar-searcher">
                        <div className="searcher">
                            <div className="button"></div>
                            <input 
                                type="text"
                                name="searcher"
                                className="searcher" 
                                placeholder="Search coins...">
                            </input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard