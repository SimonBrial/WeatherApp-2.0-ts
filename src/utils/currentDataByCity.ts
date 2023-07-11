async function currentDataByCity(city: string) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const urlForest = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;

    try {
        const response = await fetch(urlForest);
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export { currentDataByCity };
