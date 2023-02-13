import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Context from './Context';
import Todo from './Todo';
function App() {
  useEffect(() => {
    import('../node_modules/bootstrap/dist/js/bootstrap.bundle.js')
  }, [])
  return (
    <div className="App">
      <Context>
        <Todo />
      </Context>
    </div>
  );
}

export default App;
