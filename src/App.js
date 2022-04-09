import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import './App.css'
import { A, B, C, D2 } from './Components/Shop'

function App() {
  return (
    <div className="App">
      <Navbar />
      <D2 />
      <BrowserRouter>
        <div className="categoryLink">
          <Link className="link" to="/food">
            စားစရာ
          </Link>
          <Link className="link" to="/drink">
            သောက်စရာ
          </Link>
          <Link className="link" to="/salad">
            အထောင်းမျိုးစုံ
          </Link>
        </div>

        <Routes>
          <Route path="/food" element={<A />}></Route>
          <Route path="/drink" element={<B />} />
          <Route path="/salad" element={<C />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
