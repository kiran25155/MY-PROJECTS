package com.kiran.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kiran.Exception.ResourceNotFoundException;
import com.kiran.Model.RegisterModel;
import com.kiran.Repository.RegisterRepo;



@Service
public class RegisterService {
	@Autowired
private RegisterRepo regRep;

/* add */
public RegisterModel addApplicates(RegisterModel regModel) {
	if( (regModel.getAddress().length()<=20) && (regModel.getName().length()<=15) ) {
		RegisterModel reg=regRep.save(regModel);
		return reg;
	}
	
	else {
		throw new ResourceNotFoundException("Name length should not exceed 15 characters and Address length should not exceed to 20 characters");
	}
}

/* getAll */
public List<RegisterModel> listOfAllApplicates(){
    List<RegisterModel> reg=regRep.findAll();
	return reg;
}

/* getById */
public RegisterModel getSpecificApplicateRecord(String email) {
	Optional<RegisterModel> reg=regRep.findById(email);
	if(!reg.isPresent()) {
		throw new ResourceNotFoundException("Email is not Existence in Records   "+email);
	}
	else {
	return reg.get();
	}
}
/* delete */
public void deleteApplicante(String email) {
	regRep.deleteById(email);
}

/* update */
public RegisterModel updateApplicates(RegisterModel regModel) {
	RegisterModel reg=regRep.save(regModel);
	return reg;
}

}
