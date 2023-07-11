type windIconDirection = {
    direction: string;
    degRotate: number;
};

function windDirectionCalc(dir: number): windIconDirection {
    let directionValue: windIconDirection = {
        direction: "",
        degRotate: 0,
    };

    const coordinate = {
        north: "N",
        northEast: "NE",
        east: "E",
        southEast: "SE",
        south: "S",
        southWest: "SW",
        west: "W",
        northWest: "NW",
    };

    if (dir > 337.5 && dir <= 360) {
        directionValue = { degRotate: dir, direction: coordinate.north };
    } else if (dir > 0 && dir <= 22.5) {
        directionValue = { degRotate: dir, direction: coordinate.north };
    } else if (dir > 22.5 && dir <= 67.5) {
        directionValue = { degRotate: dir, direction: coordinate.northEast };
    } else if (dir > 67.5 && dir <= 112.5) {
        directionValue = { degRotate: dir, direction: coordinate.east };
    } else if (dir > 112.5 && dir <= 157.5) {
        directionValue = { degRotate: dir, direction: coordinate.southEast };
    } else if (dir > 157.5 && dir <= 202.5) {
        directionValue = { degRotate: dir, direction: coordinate.south };
    } else if (dir > 202.5 && dir <= 247.5) {
        directionValue = { degRotate: dir, direction: coordinate.southWest };
    } else if (dir > 247.5 && dir <= 292.5) {
        directionValue = { degRotate: dir, direction: coordinate.west };
    } else if (dir > 292.5 && dir <= 337.5) {
        directionValue = { degRotate: dir, direction: coordinate.northWest };
    }

    return directionValue;
}

export { windDirectionCalc };
