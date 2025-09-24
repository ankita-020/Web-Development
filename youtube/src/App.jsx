import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/appStore";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<MainContainer />} />
            <Route path="watch" element={<WatchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
