App created with React and Tailwind

Challenge: Create a weather app using an API. Use Front-end libraries like React or Vue. Don’t look at the existing solution. Fulfill user stories below:

    User story: I can see city weather as default, preferably my current location
    User story: I can search for city
    User story: I can see weather of today and the next 5 days
    User story: I can see the date and location of the weather
    User story: I can see according to image for each type of weather
    User story: I can see the min and max degree each day
    User story: I can see wind status and wind direction
    User story: I can see humidity percentage
    User story: I can see a visibility indicator
    User story: I can see the air pressure number
    User story(optional): I can request my current location weather
    User story(optional): I can convert temperature in Celcius to Fahrenheit and vice versa

Icon: https://react-icons.github.io/react-icons

API: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tocuyito?unitGroup=metric&key=SEAPUVXW54DNQAZD2EM98B486&contentType=json


API Docs: 
    - https://www.visualcrossing.com/resources/documentation/weather-api/unit-groups-and-measurement-units/
    - https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
Styles: {
    Background Principal: #100E1D,
    Background Cards: #1E213A,
    Temperature Buttons: #585676 (Desabled) #E7E7EB (Available),
    Temperature Font color: #110E3C (Available),
    Temperature Font color: #E7E7EB (Desabled),
    Color Font: #E7E7EB,
    Font Card: Raleway,
}

Tips: For Front-end developer, you can use https://cors-anywhere.herokuapp.com/ to help with accessing data from other websites that are normally forbidden by the same-origin policy of web browsers

320px — 480px: Dispositivos móviles
481px — 768px: iPads, Tabletas
769px — 1024px: pantallas pequeñas, laptops
1025px — 1200px: Computadoras de escritorio, pantallas grandes
1201px y más —  Pantallas extra-grandes, TV

ALGORITMO O ETAPAS DE DESARROLLO
1. Determinar posicion actual
    - Determinar la posicion actual del usuario mediante el Hook que se creo.
    - Pasar esa informacion mediante el contexto de la app.
2. Diseño logico de la UI
    - Usar la data que se tiene para mostrarla en las secciones de "HightLights" y "Current Weather.
3. Conversion de unidades:
    - Agregar la funcionalidad de convertir las unidades de temperatura al hacer click en cada boton
    - Al convertir las unidades de temperatura, se deben ajustar las unidades de las otras categorias
        us – United States
            Temperature, Heat Index & Wind Chill - Degrees Fahrenheit
            Precipitation - Inches
            Snow - Inches
            Wind & Wind Gust - Miles Per Hour
            Visibility - Miles
            Pressure - Millibars
            Solar Radiation - W/m2
            Solar Energy - MJ/m2
        metric – Metric
            Temperature, Heat Index & Wind Chill - Degrees Celcius
            Precipitation - Millimeters
            Snow - Centimeters
            Wind & Wind Gust - Kilometers Per Hour
            Visibility - Kilometers
            Pressure - Millibars (Hectopascals)
            Solar Radiation - W/m2
            Solar Energy - MJ/m2
        uk – United Kingdom
            Temperature, Heat Index & Wind Chill - Degrees Celcius
            Precipitation - Millimeters
            Snow - Centimeters
            Wind & Wind Gust - Miles Per Hour
            Visibility - Miles
            Pressure - Millibars
            Solar Radiation - W/m2
            Solar Energy - MJ/m2
        base – Base or scientific units
            Temperature, Heat Index & Wind Chill - Kelvin
            Precipitation - Millimeters
            Snow - Centimeters
            Wind & Wind Gust - Meters Per Second
            Visibility - Kilometers
            Pressure - Millibars
            Solar Radiation - W/m2
            Solar Energy - MJ/m2   
4. Seccion de Forecast
    - Definir la cantidad de cards que debera mostrar el area.
    - Coordinar la imagen del clima que se debe mostrar segun el clima
5. Busqueda del clima segun la ciudad que se desee