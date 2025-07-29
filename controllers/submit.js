import { database } from "../database.js";

export const submitEvent = (req, res) => {
}

export const submitJoin = (req, res) => {
    const {
        given_name,
        surname_name,
        preferred_name,
        uoft_email,
        student_number,
        student_status,
        faculty,
        college,
        program,
        year_of_study,
        country,
    } = req.body;

    const q_select = "SELECT * FROM members WHERE student_number = ?";

    database.query(q_select, [student_number], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length) {
            // User exists, update
            const q_update =
                "UPDATE members SET `given_name` = ?, `surname_name` = ?, `preferred_name` = ?, `uoft_email` = ?, `student_status` = ?, `faculty` = ?, `college` = ?, `program` = ?, `year_of_study` = ?, `country` = ? WHERE student_number = ?";
            const values_update = [
                given_name,
                surname_name,
                preferred_name,
                uoft_email,
                student_status,
                faculty,
                college,
                program,
                year_of_study,
                country,
                student_number,
            ];
            database.query(q_update, values_update, (err, data) => {
                if (err) return res.status(500).json(err);
                return res.json({ message: "User has been updated." });
            });
        } else {
            // User does not exist, insert
            const q_insert =
                "INSERT INTO members (`given_name`, `surname_name`, `preferred_name`, `uoft_email`, `student_number`, `student_status`, `faculty`, `college`, `program`, `year_of_study`, `country`, `registration_date`) VALUES (?)";
            const values_insert = [
                given_name,
                surname_name,
                preferred_name,
                uoft_email,
                student_number,
                student_status,
                faculty,
                college,
                program,
                year_of_study,
                country,
                new Date(),
            ];
            database.query(q_insert, [values_insert], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.json({ message: "User has been created." });
            });
        }
    });
};

