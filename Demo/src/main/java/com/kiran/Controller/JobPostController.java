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

import com.kiran.Model.JobPost;
import com.kiran.Service.JobPostService;

@CrossOrigin(origins="*")
@RequestMapping("/Post")
@RestController
public class JobPostController {
	@Autowired
	private JobPostService jobSer;
	
	
	@PostMapping("/createPost")
	 public JobPost addPost(@RequestBody JobPost job) {
		 return jobSer.createPost(job);
	 }
	
	@GetMapping("/getAllPosts")
	public List<JobPost> getAllPosts(){
		return jobSer.getAllPost();
	}
	
	@GetMapping("/get/{sNo}")
	public JobPost getPost(@PathVariable int sNo) {
		return jobSer.getSpecificPost(sNo);
	}
	
	@DeleteMapping("/delete/{sNo}")
	public void deletePost(@PathVariable int sNo) {
		jobSer.deletePost(sNo);
	}

	@PutMapping("/updatePost/{sNo}")
	public JobPost updatePost(@RequestBody JobPost job,@PathVariable int sNo) {
		JobPost job1=new JobPost();
		job1.setsNo(sNo);
		job1.setTitle(job.getTitle());
		job1.setDescription(job.getDescription());
		return jobSer.UpdatePost(job1);
	}
}
