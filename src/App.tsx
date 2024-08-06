import { Provider } from "react-redux";
import { Route } from "./Config/Router";
import Notification from "./views/Notification/notification";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
            <Route />
          </header>
          <Notification />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
