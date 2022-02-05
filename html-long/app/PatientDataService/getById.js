function getById(id){
  var patient = new PatientModel(patientsData.find(p => p.ID === id));
   return patient;

}