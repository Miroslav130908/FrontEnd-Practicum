import { Fragment } from 'react';
// import libs:
import { Routes, Route } from 'react-router-dom';
import Info from './pages/Info';
import Junior_classes from './pages/Junior_classes';


function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Info />} />
                <Route path="/junior" element={<Junior_classes />} />
            </Routes>
        </Fragment>
    );
}

export default App;