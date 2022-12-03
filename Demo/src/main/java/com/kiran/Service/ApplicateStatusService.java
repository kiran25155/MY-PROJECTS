package com.kiran.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kiran.Exception.ResourceNotFoundException;
import com.kiran.Model.ApplicateStatus;
import com.kiran.Repository.ApplicateStatusRepo;

@Service
public class ApplicateStatusService {
	@Autowired
	private ApplicateStatusRepo appRepo;

	/* add */
	public ApplicateStatus addNewApp(ApplicateStatus status) {
		return appRepo.save(status);
	}

	/* getAll */
	public List<ApplicateStatus> allApplicateStatus(){
		List<ApplicateStatus> list=appRepo.findAll();
		if(list.isEmpty()) {
			throw new ResourceNotFoundException("Records Not Found"); 
		}
		else {
			return list;
		}
		
	}

	/* getById */
	public ApplicateStatus getApplicateStatus(int sNo) {
		Optional<ApplicateStatus> appStatus=appRepo.findById(sNo);
		if(appStatus==null){
			throw new ResourceNotFoundException("No Record Found");
		}
		else {
		return appStatus.get();
		}
	}
	
	/* getByEmail */
	public List<ApplicateStatus> getAppByEmail(String email) {
		 List<ApplicateStatus> list=appRepo.findByEmail(email);
		if(list.size()==0) {
			throw new ResourceNotFoundException("No Record Found");
		}
		else {
			return list;
		}
		
	} 

	/* Delete */
	public void deleteRecord(int sNo) {
		appRepo.deleteById(sNo);
	}

	/* UpdateStatus */
	public ApplicateStatus UpdateAppStatus(ApplicateStatus status) {
		return appRepo.save(status);
}
}
