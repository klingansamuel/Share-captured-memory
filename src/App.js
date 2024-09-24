import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./containers/Homepage";
// import HomePage from "./containers/Homepage";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
{
  /* <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </BrowserRouter> */
}
