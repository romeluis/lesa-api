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

    const q =
        "INSERT INTO members (`given_name`, `surname_name`, `preferred_name`, `uoft_email`, `student_number`, `student_status`, `faculty`, `college`, `program`, `year_of_study`, `country`) VALUES (?)";

    const values = [
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
    ];

    database.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json({ message: "User has been created." });
    });
};

