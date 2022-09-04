import studentanswers from '../model/Studentanswers.model.js';


//Create Industry
export const CreateStudentAnswers = async (req, res, next) => {
    try {
        const newIndustry = new Industry({ 
            name : req.body.name,
            // image: req.file.originalname,
         });
        await newIndustry.save()
        res.status(200).json("Student Answers has been created.....");
    } catch (err) {
        next(err);
    }
};