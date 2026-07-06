const dotolist = require("../Models/dotolist");


const createlist = async (req, res) => {
    try {
        const {
            userId,
            title,
            description,
            category,
            priority,
            status,
            isCompleted,
            progress,
            dueDate,
            dueTime,
            startDate,
            completedAt,
            reminder,
            reminderDate,
            repeat,
            estimatedHours,
            estimatedMinutes,
            actualHours,
            actualMinutes,
            tags,
            checklist,
            notes,
            attachments,
            location,
            color,
            isImportant,
            isFavourite,
            isArchived,
            isDeleted,
            createdBy,
            updatedBy
        } = req.body;

        if (
            !userId ||
            !title ||
            !description ||
            !category ||
            !priority ||
            !status ||
            isCompleted === undefined ||
            progress === undefined ||
            !dueDate ||
            !dueTime ||
            !startDate ||
            !completedAt ||
            reminder === undefined ||
            !reminderDate ||
            !repeat ||
            estimatedHours === undefined ||
            estimatedMinutes === undefined ||
            actualHours === undefined ||
            actualMinutes === undefined ||
            !tags ||
            !checklist ||
            !notes ||
            !attachments ||
            !location ||
            !color ||
            isImportant === undefined ||
            isFavourite === undefined ||
            isArchived === undefined ||
            isDeleted === undefined ||
            !createdBy ||
            !updatedBy) {
            return res.json({
                success: false,
                message: "All fields are required"
            });
        }

        const Existing = await dotolist.findOne({ userId })

        if (Existing) {
            return res.json({ success: false, message: "Already ID existing please try anain later" })
        }

        const newlist = new dotolist({
            userId,
            title,
            description,
            category,
            priority,
            status,
            isCompleted,
            progress,
            dueDate,
            dueTime,
            startDate,
            completedAt,
            reminder,
            reminderDate,
            repeat,
            estimatedHours,
            estimatedMinutes,
            actualHours,
            actualMinutes,
            tags,
            checklist,
            notes,
            attachments,
            location,
            color,
            isImportant,
            isFavourite,
            isArchived,
            isDeleted,
            createdBy,
            updatedBy
        })

        const save = await newlist.save()

        if (!save) {
            return res.json({ success: false, message: " failed to create list please try again later" })
        }
        return res.json({ success: true, message: "doto list create successfully", save })
    } catch (err) {
        console.log(err)
        console.log("Error in create list")
    }
};

const fetchlist = async (req, res) => {
    try {
        const Totolist = await dotolist.find({})
        if (!Totolist) {
            return res.json({ succes: false, message: "candiate not found in the doto ist" })
        }
        return res.json({ succes: true, message: "candicate fetch successfully ", data: Totolist })

    } catch (err) {
        console.log(err.message)
        console.log("Error in fetch candicate ")

    }
}


module.exports =
{
    createlist,
    fetchlist
}