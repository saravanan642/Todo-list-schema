const dotolist = require("../Models/dotolist")

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

        if(!save){
            return res.json ({success : false, message :" failed to create list please try again later" })
        }
        return res.json ({success : true, message: "doto list create successfully"})
    } catch (err) {
        console.log(err)
        console.log("Error in create list")
    }
};
module.exports = createlist