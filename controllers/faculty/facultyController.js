const facultyModel = require('../../model/faculty/facultyModel')
const bcrypt = require('bcrypt')


const registerFaculty = async(req,res) =>{
    try {
        const {name, email, password} = req.body;
        facultyExist = facultyModel.findOne({email})

        if(facultyExist) {
            return res.status(400).json({Message:"faculty Already Exist",data:null})
        }

        const hashpassword = await bcrypt.hash(password,12);
        const faculty = new facultyModel({name,email,password:hashpassword})

        await faculty.save();
        return res.status(201).json({Message:"faculty created Sucessfully...",data:faculty})
        
    } catch (error) {
        return res.status(501).json({Message:"server side error",data:error})
    }
}

const loginFaculty = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const faculty = await facultyModel.findOne({email})

        if(!faculty) {
            return res.status(400).json({Message:"faculty not found",data:null})
        }

        const passwordMatch = bcrypt.compare(password,faculty.password)
        if(!passwordMatch) {
            return res.status(400).json({Message:"password didn't match",data:null})
        }

        const token = jwt.sign({facultyId:faculty._id},process.JWT_SECRETKEY)

        return res.status(201).json({Message:"faculty logged in Sucessfully...",data:token})

    } catch (error) {
        return res.status(501).json({Message:"server side error",data:error})
    }
}

module.exports = {registerFaculty,loginFaculty};