import { Route } from "./Config/Router";
import Notification from "./views/Notification/notification";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route />
      </header>
      <Notification />
    </div>
  );
}

export default App;
