function validation(data){
    let errors={};
    if(!data.uname){
        errors.uname="Please enter UserName"
    }

    if(data.uname && data.uname.length < 8){
        errors.uname="Please enter minimum 8 chars"
    }


    if(!data.pwd){
        errors.pwd="Please enter password"
    }

    if(!data.email){
        errors.email="Please enter email"
    }else{
        var reg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        var isValid=reg.test(data.email);
        if(!isValid){
            errors.email="Please enter valid email id" 
        }
    }

    if(!data.fname){
        errors.fname="Please enter Full name"
    }

    return errors;

}

export default validation;