import logo from './logo.svg';
import './App.css';
import MyRoutes from './MyRoutes';
import botReducer from './reducers/botReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function App() {
  const store = createStore(botReducer)
  return (
    <div className="App">
      <Provider store={store}>
        <MyRoutes />

      </Provider>
    </div>
  );
}

export default App;
