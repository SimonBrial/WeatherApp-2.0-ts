import { CurrentWeatherContainer } from "./currentWeather";
import { Container } from "./container";
import { useDataContext } from "../hooks";
import Loading from "./loadder/Loading";

const Layout = () => {
    const { statusData } = useDataContext();

    return (
        <div className="container-app">
            {statusData ? (
                <>
                    <CurrentWeatherContainer />
                    <Container />
                </>
            ) : (
                <>
                    <Loading />
                </>
            )}
        </div>
    );
};

export default Layout;
