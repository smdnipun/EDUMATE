import studentanswers from '../model/Studentanswers.model.js';


//Create Industry
export const CreateStudentAnswers = async (req, res, next) => {
    try {
        const newStudentAnswers = new studentanswers({ 
            name : req.body.name,
            // image: req.file.originalname,
         });
        await newStudentAnswers.save()
        res.status(200).json("Student Answers has been created.....");
    } catch (err) {
        next(err);
    }
};

//Update Industry
       
export const UpdateStudentAnswers = async(req, res, next) => {
    try {
            const updaStudentAnswers = await studentanswers.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
             res.status(200).json(updateIndustry);
    } catch (err) {
        next(err);
    }
};

//Delete Industry
export const DeleteStudentAnswers = async (req, res, next) => {
    try {
        await studentanswers.findByIdAndDelete(req.params.id);

        res.status(200).json("Industry has been deleted");
    } catch (err) {
        next(err);
    }
};

//Get Industry
export const GetStudentAnswers= async (req, res, next) => {
    try {
        const getStudentAnswers = await studentanswers.findById(req.params.id);

        res.status(200).json(getStudentAnswers);
    } catch (err) {
        next(err);
    }
};

//Get all Industry
export const GetAllStudentAnswers = async (req, res, next) => {
    try {
        const getallStudentAnswers= await studentanswers.find();

        res.status(200).json(getallStudentAnswers);
    } catch (err) {
        next(err);
    }
};

