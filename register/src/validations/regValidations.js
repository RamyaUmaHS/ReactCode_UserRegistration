


const regValidation=(data)=>{
    let errors={};
    if(!data.u){
        errors.u="Please enter user name";
    }

    if(!data.e){
        errors.e="Please enter email";
    }

    if(!data.p){
        errors.p="Please enter password";
    }else if(data.p.length < 8){
        errors.p="password should be min 8 chars";
    }

    if(!data.m){
        errors.m="Please enter phone number";
    }

    return errors;
}

export default regValidation;