import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./containers/Homepage";
import ParticlesBackground from "./components/particles";
import Particles from "react-particles";
// import HomePage from "./containers/Homepage";

function App() {
  // const router2 = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Root />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "contacts/:contactId",
  //     element: <Contact />,
  //   },
  // ]);
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
