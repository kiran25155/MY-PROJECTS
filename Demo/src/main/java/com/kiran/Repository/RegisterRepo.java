package com.kiran.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kiran.Model.RegisterModel;

@Repository
public interface RegisterRepo extends JpaRepository<RegisterModel,String> {
	

}
