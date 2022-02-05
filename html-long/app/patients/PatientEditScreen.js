class PatientEdit {
    init() {
      var current=this;
      $(".edit ").click(function(){
        current.edit(this)
      });
      $(".emptyForm").click(this.emptyForm);
      $("#nameform").submit(() => {
        this.save();
       });
    }
    edit(current) {
      var id = $(current).data("id");
      this.setDataToUI(id);
    }


    emptyForm() {
      $('#nameform').attr('data-id', "-1");
      document.getElementsByClassName("firstName")[0].value = "";
      document.getElementsByClassName("middleName")[0].value = "";
      document.getElementsByClassName("lastName")[0].value = "";
      document.getElementsByClassName("email")[0].value = "";
      document.getElementsByClassName("DOB")[0].value = "";
      document.getElementsByClassName("lastCheck")[0].value = "";
      document.getElementById("Status").value = "";
    }
    save() {
       var patient=this.getDataFromUI();
       var templateText = document.getElementById("patient-template").innerHTML;
      if (patient.ID == "-1") {
        var tmp = patientsData.pop();
        patientsData.push(tmp);
        patient.ID = tmp.ID + 1;
      }
      render.renderTemplate(patient, templateText);
    }
    
    setDataToUI(id){
      var patient = new PatientModel(patientsData.find(p => p.ID === id));
      $('#nameform').attr('data-id', patient.ID);
      document.getElementById("activeCheck").checked = true;
      document.getElementsByClassName("firstName")[0].value = patient.fname;
      document.getElementsByClassName("middleName")[0].value = patient.mname;
      document.getElementsByClassName("lastName")[0].value = patient.lname;
      document.getElementsByClassName("email")[0].value = patient.email;
      document.getElementsByClassName("DOB")[0].value = patient.DOB;
      document.getElementById(patient.gender.toLowerCase() + "Radio").checked = true;
      document.getElementById(patient.status).selected = true;
      document.getElementsByClassName("lastCheck")[0].value = patient.lastCheck;
    }
    getDataFromUI(){
      var id = $("#nameform").data("id");
      var firstName = document.getElementsByClassName("firstName")[0].value;
      var middleName = document.getElementsByClassName("middleName")[0].value;
      var lastName = document.getElementsByClassName("lastName")[0].value;
      var email = document.getElementsByClassName("email")[0].value;
      var dateOfBirth = document.getElementsByClassName("DOB")[0].value;
      var radios = document.getElementsByName("genderRadio");
      var gender = "";
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          gender = radios[i].value;
          break;
        }
      }
      var lCheck = document.getElementsByClassName("lastCheck")[0].value;
      var status = document.getElementById("Status").value;
      var newone = {
        ID: id,
        fname: firstName,
        mname: middleName,
        lname: lastName,
        DOB: dateOfBirth,
        gender: gender,
        email: email,
        lastCheck: lCheck,
        CreatedBy: 1,
        Active: true,
        status: status
      };
      var newpatient = new PatientModel(newone);
      return newpatient;
    }
  }
this.patientEditScr = new PatientEdit();
  