package com.kiran.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kiran.Model.RegisterModel;
import com.kiran.Service.RegisterService;
@CrossOrigin(origins="http://localhost:3333")
@RequestMapping("/Registeration")
@RestController  
public class RegisterController {
	@Autowired
	private RegisterService regser;
	 
	@PostMapping("/addApplicate")
	public RegisterModel addApplicate(@RequestBody RegisterModel regModel) {
		RegisterModel regModel1=regser.addApplicates(regModel);
		return regModel1;
	}
	
	@CrossOrigin(origins="http://localhost:3333")
	@GetMapping("/get/{email}")
public RegisterModel getById(@PathVariable String email) {
		RegisterModel regModel=regser.getSpecificApplicateRecord(email);
		return regModel;
	}
	
	
	@GetMapping("/getAll/ApplicateDetails")
	public List<RegisterModel> getAll(){
		return regser.listOfAllApplicates();
	}
	
	@PutMapping("/updateApplicate/{email}")
	public RegisterModel updateApplicate(@RequestBody RegisterModel regModel,@PathVariable String email) {
		RegisterModel reg=new RegisterModel();
		reg.setEmail(email);
		reg.setName(regModel.getName());
		reg.setMobile_Number(regModel.getMobile_Number());
		reg.setDob(regModel.getDob());
		reg.setGender(regModel.getGender());
		reg.setCountry(regModel.getCountry());
		reg.setPassword(regModel.getPassword());
		reg.setConfpassword(regModel.getConfpassword());
		reg.setQualification(regModel.getQualification());
		reg.setAddress(regModel.getAddress());
		return regser.updateApplicates(reg);
	}
	
	@DeleteMapping("/delete/{email}")
	public void deleteApplicate(@PathVariable String email) {
		regser.deleteApplicante(email);
	}
}

