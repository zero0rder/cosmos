import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="relative h-full w-full">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
