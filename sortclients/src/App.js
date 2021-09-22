import './App.css';

import SearchInput from './components/SearchInput';
import TableClients from './components/TableClients';
// import PaginationBar from './components/PaginationBar';

import clientsWithIcons from './AddIcons';

function App() {
  console.log(clientsWithIcons);
  return (
    <div>
      <SearchInput />
      <TableClients data={clientsWithIcons} />
      {/* <PaginationBar/> */}
    </div>
  );
}

export default App;
