import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import CustomerDashboard from './components/CustomerDashboard';
import AdminDashboard from './components/AdminDashboard';
import SignUp from './components/SignUp';
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
import MovieDetails from "./components/MovieDetails";
import Booking from "./components/Booking";
import MoviesList from "./components/MoviesList";
import ManageBooking from "./components/ManageBooking";

function App() {
  return (
    <div className="App">
      {/*<MemoryRouter>*/}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='/admin' element={<AdminDashboard/>}></Route>
          <Route path='/admin/add-movie' element={<AddMovie/>}></Route>
          <Route path='/admin/edit-movies' element={<EditMovie/>}></Route>
          <Route path='/home' element={<CustomerDashboard/>}></Route>
          <Route path='/movie/:movieId' element={<MovieDetails/>}></Route>
          <Route path='/book/:movieId' element={<Booking/>}></Route>
          <Route path='/movies' element={<MoviesList/>}></Route>
          <Route path='/bookings' element={<ManageBooking/>}></Route>
        </Routes>
      </BrowserRouter>
      {/*</MemoryRouter>*/}
    </div>
  );
}

export default App;
