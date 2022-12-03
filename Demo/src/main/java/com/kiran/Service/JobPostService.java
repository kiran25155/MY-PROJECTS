package com.kiran.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kiran.Model.JobPost;
import com.kiran.Repository.JobPostRepo;

@Service
public class JobPostService {
	@Autowired
	private JobPostRepo jobRepo;
	/*createPost*/
public JobPost createPost(JobPost job) {
	return jobRepo.save(job);
}

    /* getAll */
public List<JobPost> getAllPost(){
	return jobRepo.findAll();
}

   /* getById */
public JobPost getSpecificPost(int sNo) {
	Optional<JobPost> opt=jobRepo.findById(sNo);
	JobPost get=opt.get();
	return get;
}

    /* deletePost */
public void deletePost(int sNo) {
	jobRepo.deleteById(sNo);
}

     /* updatePost */
public JobPost UpdatePost(JobPost job) {
	return jobRepo.save(job);
}

}
