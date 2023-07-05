import { Container } from "./components/container";
import { CurrentWeatherContainer } from "./components/currentWeather";
import "./index.scss";

function App(): JSX.Element {
    return (
        <div className="container-app">
            <CurrentWeatherContainer />
            <Container />
        </div>
    );
}

export default App;
