import Dashboard from './components/Dashboard';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';

function App() {
  const admin = useSelector(state=>state.user.currentUser);

  return ( 
    <>
    <BrowserRouter>
      <Routes> 
        <Route
            path="/"
            element={admin ? <Dashboard page="home"/> : <Navigate to="/login"/>}
            exact
          ></Route> 
          <Route
              path="/filter/:filter"
              element={admin ? <Dashboard page="home"/> : <Navigate to="/login"/>}
          ></Route>
          <Route
              path="/filter/:filter/date/:date"
              element={admin ? <Dashboard page="home"/> : <Navigate to="/login"/>}
          ></Route>
          
        <Route
            path="/orders"
            element={admin ? <Dashboard page="orders"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/orders/filter/:filter"
            element={admin ? <Dashboard page="orders"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/orders/filter/:filter/date/:date"
            element={admin ? <Dashboard page="orders"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/order/:id"
            element={admin ? <Dashboard page="order"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/users"
            element={admin ? <Dashboard page="users"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/categories"
            element={admin ? <Dashboard page="categories"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/products"
            element={admin ? <Dashboard page="products"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/carriers"
            element={admin ? <Dashboard page="carriers"/> : <Navigate to="/login"/>}
        ></Route> 
        <Route
            path="/newproduct"
            element={admin ? <Dashboard page="newproduct"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/newcategory"
            element={admin ? <Dashboard page="newcategory"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/newcarrier"
            element={admin ? <Dashboard page="newcarrier"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/carrier/:id"
            element={admin ? <Dashboard page="carrier"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/product/:id"
            element={admin ? <Dashboard page="product"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/category/:id"
            element={admin ? <Dashboard page="category"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/products/name/:name/pageNumber/:pageNumber/"
            element={admin ? <Dashboard page="products"/> : <Navigate to="/login"/>}
        ></Route>
        <Route
            path="/users/name/:name/pageNumber/:pageNumber/"
            element={admin ? <Dashboard page="users"/> : <Navigate to="/login"/>}
        ></Route> 
        <Route
            path="/login"
            element={admin ? <Navigate to="/"/> : <Login />}
        ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
