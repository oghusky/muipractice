import Navbar from "./components/Navbar";
import GridTemp from "./components/Grid";
import TanStackEx from "./components/TanStack";
import EnhancedTable from "./components/Table";
import Inputs from "./components/Input";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Inputs/>
      <TanStackEx/>
      <EnhancedTable/>
      <GridTemp/>
    </div>
  );
}

export default App;
