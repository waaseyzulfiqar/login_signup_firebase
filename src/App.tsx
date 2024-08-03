import { Provider } from "react-redux";
import { Route } from "./Config/Router";
import Notification from "./views/Notification/notification";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Route />
        </header>
        <Notification />
      </div>
    </Provider>
  );
}

export default App;
