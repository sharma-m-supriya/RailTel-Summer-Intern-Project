import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ButtonAppBar from './components/Navbar/Navbar';
import TemporaryDrawer from './components/TemporaryDrawer/TemporaryDrawer';
import './App.css';
import Page1 from '../src/components/Table/Page1';
import Page2 from '../src/components/Table/Page2';
import Page3 from '../src/components/Table/Page3';
import Create from './components/Home/Create';
import Create2 from './components/Home/Create2';
import Update from '../src/components/Home/Update';
import ProtectedRoute from './components/Login/PrivateRoute';
import { useNavigate } from 'react-router-dom';

function App() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Router>
      <div>
      {/* <button onClick={toggleDrawer}>Open Drawer</button> */}
      <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      {/* <FetchData /> */}
         {/* <ButtonAppBar /> */}
        <Routes>
        <Route path="/" element={<Login />} />
                <Route 
                    path="/home" 
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/page1" 
                    element={
                        <ProtectedRoute>
                            <Page1 />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/page2" 
                    element={
                        <ProtectedRoute>
                            <Page2 />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/page3" 
                    element={
                        <ProtectedRoute>
                            <Page3 />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="*" 
                    element={<useNavigate to="/"/>} 
                />
        {/* <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} /> */}
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route path='/create' element={<Create />} />
          <Route path="/create2" element={<Create2 />} />
          <Route path="/update" element={<Update />} />
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;