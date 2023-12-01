import Navbar from "./components/Navbar";
import GridTemp from "./components/Grid";
import TanStackEx from "./components/TanStack";
import EnhancedTable from "./components/Table";
import Inputs from "./components/Input";
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      {/* https://mui.com/material-ui/react-text-field/ */}
      <Inputs/>
      
      {/* https://mui.com/material-ui/react-table/#basic-table */}
      <EnhancedTable/>
      
      {/* https://mui.com/material-ui/react-grid/#how-it-works */}
      <GridTemp/>
      
      {/* 
      docs: https://tanstack.com/query/v4/docs/react/guides/paginated-queries
      video: https://www.youtube.com/watch?v=r8Dg0KVnfMA
       */}
      <TanStackEx/>
    </div>
  );
}

export default App;
