
import User from '../database/models/User';
import Record from '../database/models/Record';

class MedicalRecordController{
  static async createOne(req,res){
     const { body } = req;

     try{
        const user = new User({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            age: parseInt(body.age, 10),
            gender: body.gender,
        });
    
        await user.save();
         
         const medicalRecord= new Record({
             user: user._id,
             title: body.record_title,
             description: body.record_description,
             has_coronavirus: body.has_coronavirus === 'on' ? true : false,
         });
    
         await medicalRecord.save();

         return res.redirect('/records');
     } catch(err){
         console.log(err);
     }

     
  }

  static async getAll(req, res){
      return res.render('pages/index');
  }

  static async getMedicalRecords(req, res){
      const {query: {age}}=req;

      let records;

      if(age){
          if(age==='under_18'){
            records=await Record.find({
            }).sort({created_at: -1})
            .populate('user').exec();

            records = records.filter(record=>record.user.age < 18);
          }
          else{
            records=await Record.find({
            }).sort({created_at: -1})
            .populate('user').exec();

            records = records.filter(record=>record.user.age >= 18);
          }

          return res.render('pages/medical_records', {
            records
        });
      }
     records= await Record.find({})
     .sort({created_at: -1})
     .populate('user').exec();

      return res.render('pages/medical_records', {
          records
      });
  }
}


export default MedicalRecordController;
