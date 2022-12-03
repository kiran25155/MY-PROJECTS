package com.kiran.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Jobs")
public class JobPost {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int sNo;
	@Column
	private String title;
	@Column
	private String description;
	public JobPost() {
		super();
		// TODO Auto-generated constructor stub
	}
	public JobPost(int sNo, String title, String description) {
		super();
		this.sNo = sNo;
		this.title = title;
		this.description = description;
	}
	public int getsNo() {
		return sNo;
	}
	public void setsNo(int sNo) {
		this.sNo = sNo;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "JobPost [sNo=" + sNo + ", title=" + title + ", description=" + description + "]";
	}

}
