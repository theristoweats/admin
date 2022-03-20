import Dashboard from './components/Dashboard';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Routes>
        <Route
            path="/"
            element={<Dashboard page="home"/>}
            exact
          ></Route>
          
        <Route
            path="/orders"
            element={<Dashboard page="orders"/>}
        ></Route>
        <Route
            path="/users"
            element={<Dashboard page="users"/>}
        ></Route>
        <Route
            path="/categories"
            element={<Dashboard page="categories"/>}
        ></Route>
        <Route
            path="/products"
            element={<Dashboard page="products"/>}
        ></Route>
        <Route
            path="/carriers"
            element={<Dashboard page="carriers"/>}
        ></Route> 
        <Route
            path="/newproduct"
            element={<Dashboard page="newproduct"/>}
        ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
