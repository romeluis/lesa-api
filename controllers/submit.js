import { database } from "../database.js";

export const submitEvent = (req, res) => {
    const event_id = req.params.id;
    const { student_id } = req.body;

    // Check if student exists
    const q_select = "SELECT * FROM members WHERE student_number = ?";
    database.query(q_select, [student_id], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) {
            return res.status(404).json({ message: "Student not found." });
        }

        // Check if student is already registered for this event
        const q_check_registration = "SELECT * FROM event_registration WHERE event_id = ? AND student_id = ?";
        database.query(q_check_registration, [event_id, student_id], (err, registrationData) => {
            if (err) return res.status(500).json(err);
            if (registrationData.length > 0) {
                return res.json({ message: "Student registered for event." });
            }

            // Student exists and is not already registered, register for event
            const q_insert = "INSERT INTO event_registration (`event_id`, `student_id`) VALUES (?, ?)";
            database.query(q_insert, [event_id, student_id], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.json({ message: "Student registered for event." });
            });
        });
    });
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
                "UPDATE members SET `given_name` = ?, `surname_name` = ?, `preferred_name` = ?, `uoft_email` = ?, `student_status` = ?, `faculty` = ?, `college` = ?, `program` = ?, `year_of_study` = ?, `country` = ?, `last_update` = ? WHERE student_number = ?";
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
                new Date(),
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

