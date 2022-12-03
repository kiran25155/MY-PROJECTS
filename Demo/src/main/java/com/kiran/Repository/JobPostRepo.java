package com.kiran.Repository;





import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kiran.Model.JobPost;

@Repository
public interface JobPostRepo extends JpaRepository<JobPost,Integer> {

}
