const Attendance = require('../../model/Attendance/AttendanceModel');

const markAttendance = async (req, res) => {
    try {
        const attendance = new Attendance({
            facultyId: req.facultyId,
            date: new Date(),
            status: 'Present'
        });

        await attendance.save();

        res.status(201).json({
            message: 'Attendance marked successfully',
            attendance
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTodayAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find({
            facultyId: req.facultyId
        });

        res.status(200).json(attendance);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getAttendanceByDate = async (req, res) => {
    try {
        const date = new Date(req.query.date);

        const attendance = await Attendance.find({
            facultyId: req.facultyId,
            date: date
        });

        res.status(200).json(attendance);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    markAttendance,
    getTodayAttendance,
    getAttendanceByDate
};