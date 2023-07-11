function errorHandle(code: string): string {
    const errorCodeArray = [
        {
            code: "current_position",
            msg: "Hay un error y no se puede mostrar la informacion de la posicion actual",
        },
        {
            code: "espera_permisos",
            msg: "A la espera por los permisos del usuario para determinar la posicion actual",
        },
        {
            code: "code_200",
            msg: "Datos obtenidos satisfactoriamente",
        },
        {
            code: "Geolocation_error",
            msg: "Geolocation is not supported by your browser",
        },
    ];

    const response = errorCodeArray.filter(
        (errorCode) => code === errorCode.code,
    );

    return response[0].msg;
}

export default errorHandle;
