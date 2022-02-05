function getAll(){
var allPatient=[];
    patientsData.forEach(patient => {
        var patient = new PatientModel(patient);
        allPatient.push(patient);
        
    });
    return allPatient;

}