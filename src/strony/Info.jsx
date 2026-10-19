import { Route, Routes, Link } from 'react-router'
import App from '../App';
function Info() {
    return (
        <>
         <nav>
        <Link to="/App"><button> Dodaj do koszyka</button></Link> <br></br>
      </nav>

      <Routes>
          <Route path="/App" element={<App />} />
        </Routes>
        
        </>
    )
}

export default Info;
