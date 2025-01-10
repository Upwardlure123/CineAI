import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import userStore from "./utils/store";

function App() {
  return (
    <div>
      <Provider store={userStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
