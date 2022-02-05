function getIndexById(id){
    var patients = getAll();
    for(var i=0;i<patients.length;i++){
        if(patients[i].ID==id){
            return i;
        }
    }
return null;

}