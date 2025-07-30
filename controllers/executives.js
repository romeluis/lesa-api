import {database} from "../database.js";

export const getExecutives = (request, response) => {

    const query = "SELECT * FROM team";

    database.query(query, [], (error, data) => {
        if (error) return response.send(error);
        return response.status(200).json(data);
    });
}