
import './App.css';
import BookHome from './components/BookHome';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="" element={<BookHome />} />
          <Route path="bookdetail/:id" element={<BookDetails book="hello" />} />
          <Route path="*" element={<BookHome />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
