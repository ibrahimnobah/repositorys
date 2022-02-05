class PatientModel {
  constructor(data) {
    this.ID = data.ID;
    this.fname = data.fname;
    this.mname = data.mname;
    this.lname = data.lname;
    this.DOB = this.getdate(data.DOB);
    this.gender = this.valueOfGender(data.gender);
    this.email = data.email;
    this.lastCheck = this.getdate(data.lastCheck);
    this.CreatedBy = data.CreatedBy;
    this.Active = data.Active;
    this.creationDate = data.creationDate;
    this.status = this.valueOfStatus(data.status);
  }
  valueOfGender(genderId) {
    if (genderId == 1) {
      return "Male";
    }
    return "Female";
  }

  valueOfStatus(statusId) {
    switch (statusId) {
      case 0:
        return "Draft";
      case 1:
        return "Saved";
      default:
        return "Deleted";
    }
  }
  getdate(date) {
    var d = new Date(date);
    var dd = d.getDate();
    var mm = d.getMonth() + 1;
    var yy = d.getFullYear();
    return yy + "-" + (mm > 9 ? '' : '0') + mm + "-" + (dd > 9 ? '' : '0') + dd;

  }
}