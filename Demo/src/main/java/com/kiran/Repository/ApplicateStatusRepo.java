package com.kiran.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kiran.Model.ApplicateStatus;
@Repository
public interface ApplicateStatusRepo extends JpaRepository<ApplicateStatus,Integer>{

	
	public List<ApplicateStatus> findByEmail(String email);

}
