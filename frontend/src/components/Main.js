import Dashboard from "./pages/dashboard"
import { 
    Routes, 
    Route 
} from "react-router"

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Dashboard />}>
                </Route>
            </Routes>
        </main>
    )
}

export default Main