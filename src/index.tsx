import { render } from "react-dom";
import {
  AppWrapper,
  MainWrapper,
  TopTextWrapper,
} from "./components/atoms/layout";
import { LoremText, MarvelousText } from "./components/atoms/texts";
import { Provider } from "react-redux";
import store from "./features/store";
import ItemWizard from "./features/item-wizard";

const App = () => {
  return (
    <AppWrapper>
      <MainWrapper>
        <TopTextWrapper>
          <MarvelousText />
          <LoremText />
        </TopTextWrapper>
        <ItemWizard />
      </MainWrapper>
    </AppWrapper>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
