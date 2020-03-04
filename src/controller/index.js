import { User, Address, MedicalRecord } from '../database/models';

class MedicalRecordController{
  static async createOne(req,res){
     const {body}=req;
     const {first_name, last_name, email, age, gender, city, state, record_title, record_description, has_coronavirus}=body;

     const user=await User.create({
        first_name,
        last_name,
        email,
        age,
        gender,
    });

     const address = await Address.create({
        user_id: user.id,
        city,
        state,
     });
     
     const medicalRecord=await MedicalRecord.create({
         user_id: user.id,
         title: record_title,
         description: record_description,
         has_coronavirus
     });

     return res.render('pages/index', {
         medicalRecord,
         user,
     });
     
  }

  static async getAll(req, res){
      return res.render('pages/index');
  }

  static async getMedicalRecords(req, res){
      const records=await MedicalRecord.findAll({
          include: [
              {
                  model: User,
                  as: 'user'
              }
          ]
      });

      return res.render('pages/medical_records', {
          records
      });
  }
}


export default MedicalRecordController;
