import { Fragment } from 'react';
// import libs:
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Info from './pages/Info';


function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/info" element={<Info />}/>
            </Routes>
            <Footer />
        </Fragment>
    );
}

export default App;