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

import com.kiran.Model.ApplicateStatus;
import com.kiran.Service.ApplicateStatusService;
@CrossOrigin(origins="*")
@RequestMapping("/AppliacteStatus")
@RestController  
public class ApplicateStatusController {
	@Autowired
	private ApplicateStatusService appSer;
	
	@PostMapping("/newAppliacteStatus")
	public ApplicateStatus newAppStatus(@RequestBody ApplicateStatus status) {
		return appSer.addNewApp(status);
	}
	
	@GetMapping("/getAllAppStatus")
	public List<ApplicateStatus> getAllAppStatus(){
		return appSer.allApplicateStatus();
	}
	
	@GetMapping("/getById/{sNo}")
	public ApplicateStatus getApplicateStatus(@PathVariable int sNo) {
		return appSer.getApplicateStatus(sNo);
	}
	
	@GetMapping("/get/{email}")
	public List<ApplicateStatus> getByEmail(@PathVariable String email){
		return appSer.getAppByEmail(email);
	}
	
	@DeleteMapping("/delete/{sNo}")
	public void delete(@PathVariable int sNo) {
		 appSer.deleteRecord(sNo);
	}
	
	@PutMapping("/update/{sNo}")
	public ApplicateStatus updateAppStatus(@RequestBody ApplicateStatus status,@PathVariable int sNo) {
		ApplicateStatus appStatus=new ApplicateStatus();
		appStatus.setsNo(sNo);
		appStatus.setName(status.getName());
		appStatus.setMobileNumber(status.getMobileNumber());
		appStatus.setEmail(status.getEmail());
		appStatus.setDegree(status.getDegree());
		appStatus.setStatus(status.getStatus());
		appStatus.setTitle(status.getTitle());
		appStatus.setGender(status.getGender());
		return appSer.UpdateAppStatus(appStatus);
		
	}

}
