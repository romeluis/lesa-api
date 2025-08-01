import {database} from "../database.js";

export const getResources = (request, response) => {

    const query = "SELECT * FROM resources";

    database.query(query, [], (error, data) => {
        if (error) return response.send(error);
        return response.status(200).json(data);
    });
}