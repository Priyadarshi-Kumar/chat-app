import { BrowserRouter, Routes, Route, Navigate } from "react-router";

// Pages
import Messenger from "./pages/messenger";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="messenger" element={<Messenger />} />
                <Route path="*" element={<Navigate to="messenger" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
