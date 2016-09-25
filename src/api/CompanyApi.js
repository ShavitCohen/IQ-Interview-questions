import firebase from 'firebase';
import fireBaseInit from './fbInit';

class CompanyApi {
  static convertToArray(data, ids) {
    let arr = [];
    Object.keys(data).map(x => { 
      if(ids[x]){//filtering only companies of this group
        arr.push({id: x, name: x, description: data[x].description});
      }
    });
    return arr;
  }
  static getAllCompanies(groupId) {
    const ref = fireBaseInit.ref(`groups/${groupId}/companies`);
    return new Promise((resolve, reject) => {
        ref.on("value", (data)=> {
          if(data.val()) {
            let ids = data.val();//<--ids of companies othis group
            fireBaseInit.ref(`companies`).on("value", (compData)=> {
               resolve(this.convertToArray(compData.val(), ids));
            })
          } else {
             resolve([]);
          }          
        });
    });
  }
}
export default CompanyApi;