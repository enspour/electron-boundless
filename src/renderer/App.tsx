import Router from "./Router";

import useServices from "@hooks/initializers/useServices";

import "@assets/styles/reset.scss";
import "@assets/styles/global.scss";

import "@assets/styles/themes/dark.scss";

const App = () => {
    useServices();

    return <Router />;
};

export default App;
