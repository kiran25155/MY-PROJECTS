package com.kiran.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class RegisterModel {
	@Id
 @Column(length=20) 
	private String email;	
	@Column(length=15)
	private String name;
	@Column(length=10)
	private String mobile_Number;
	@Column(length=10)
	private String dob;
	@Column(length=10)
	private String gender;
	
	private String qualification;
	@Column(length=20)
	private String country;
	@Column(length=20)
	private String password;
	@Column(length=20)
	private String confpassword;
	@Column(length=20)
	private String address;
	public RegisterModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RegisterModel(String email, String name, String mobile_Number, String dob, String gender,
			String qualification, String country, String password, String confpassword, String address) {
		super();
		this.email = email;
		this.name = name;
		this.mobile_Number = mobile_Number;
		this.dob = dob;
		this.gender = gender;
		this.qualification = qualification;
		this.country = country;
		this.password = password;
		this.confpassword = confpassword;
		this.address = address;
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
	public String getMobile_Number() {
		return mobile_Number;
	}
	public void setMobile_Number(String mobile_Number) {
		this.mobile_Number = mobile_Number;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfpassword() {
		return confpassword;
	}
	public void setConfpassword(String confpassword) {
		this.confpassword = confpassword;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "RegisterModel [email=" + email + ", name=" + name + ", mobile_Number=" + mobile_Number + ", dob=" + dob
				+ ", gender=" + gender + ", qualification=" + qualification + ", country=" + country + ", password="
				+ password + ", confpassword=" + confpassword + ", address=" + address + "]";
	}
	public RegisterModel orElseThrow(Object object) {
		// TODO Auto-generated method stub
		return null;
	}
	

	

}
