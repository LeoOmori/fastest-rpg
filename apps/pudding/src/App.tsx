import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Room from "./pages/room"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="room" element={<Room />} />
      </Routes>
    </div>
  )
}

export default App
