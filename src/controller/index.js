import { User, Address, MedicalRecord } from '../database/models';
import { Op } from 'sequelize';

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
      const {query: {age}}=req;

      let records;

      if(age){
          if(age==='under_18'){
             records=await MedicalRecord.findAll({
                 include: [
                     {
                         model: User,
                         as: 'user',
                         where: {
                             age: {
                                 [Op.lt]: 18,
                             }
                         }
                     }
                 ]
             })

             console.log(records[0].user.dataValues);
          }
          else{
              records=await MedicalRecord.findAll({
                  include: [
                      {
                          model: User,
                          as: 'user',
                          where: {
                              age: {
                                  [Op.gte]: 18,
                              }
                          }
                      }
                  ]
              })
          }

          return res.render('pages/medical_records', {
            records
        });
      }
     records=await MedicalRecord.findAll({
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
