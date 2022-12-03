package com.kiran.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class ApplicateStatus {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int sNo;
	private String email;
	private String name;
	private String mobileNumber;
	private String degree;
	private String gender;
	private String title;
	private String status;
	public ApplicateStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ApplicateStatus(int sNo, String email, String name, String mobileNumber, String degree, String gender,
			String title, String status) {
		super();
		this.sNo = sNo;
		this.email = email;
		this.name = name;
		this.mobileNumber = mobileNumber;
		this.degree = degree;
		this.gender = gender;
		this.title = title;
		this.status = status;
	}
	public int getsNo() {
		return sNo;
	}
	public void setsNo(int sNo) {
		this.sNo = sNo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "ApplicateStatus [sNo=" + sNo + ", email=" + email + ", name=" + name + ", mobileNumber=" + mobileNumber
				+ ", degree=" + degree + ", gender=" + gender + ", title=" + title + ", status=" + status + "]";
	}
	
	
	
	

}
