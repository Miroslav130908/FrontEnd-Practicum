import { Fragment } from 'react';
// import libs:
import { Routes, Route } from 'react-router-dom';
import Info from './pages/Info';


function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/info" element={<Info />}/>
            </Routes>
        </Fragment>
    );
}

export default App;