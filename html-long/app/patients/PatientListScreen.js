
class PatientList {
    inti() {
       this.renderTable();
    }
    renderTable() {
      var tableData = $(".tableData");
      tableData.empty();
      var renderEntine = document.getElementById("patient-template").innerHTML;
      patientsData.forEach(patient => {
      var patient = new PatientModel(patient);
      render.renderTemplate(patient, renderEntine);
      });
  
    }
  }
 patientListScr = new PatientList();
