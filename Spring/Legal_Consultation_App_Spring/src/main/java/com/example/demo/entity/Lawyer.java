package com.example.demo.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Lawyer")
public class Lawyer {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lid")
    private int lid;
	
	@Column(name = "lname")
    private String lname;
	
	@Column(name = "availibility")
	private String availibility;
	
	@Column(name = "lemail")
    private String lemail;
	
	@Column(name = "lpassword")
    private String lpassword;

	@Column(name = "lmobile")
    private String lmobile;
	
	@Column(name = "experience")
    private int experience;
    
    @Column(name = "domain")
    private String domain;
    
    @Column(name = "license_no")
    private String license_no;
    
    @Column(name = "city")
    private String city;
    
    @Column(name = "state")
    private String state;
    
    @Column(name = "pincode")
    private String pincode;
    
    @OneToMany(mappedBy = "lawyer", fetch = FetchType.LAZY)
    private List<Answer> answers;

    @OneToMany(mappedBy = "lawyer", fetch = FetchType.LAZY)
    private List<Client> clients;

	public Lawyer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Lawyer(int lid, String lname, String availibility, String lemail, String lpassword,
			String lmobile, int experience, String domain, String license_no, String city, String state,
			String pincode) {
		super();
		this.lid = lid;
		this.lname = lname;
		this.availibility = availibility;
		this.lemail = lemail;
		this.lpassword = lpassword;
		this.lmobile = lmobile;
		this.experience = experience;
		this.domain = domain;
		this.license_no = license_no;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	public int getLid() {
		return lid;
	}

	public void setLid(int lid) {
		this.lid = lid;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getAvailibility() {
		return availibility;
	}

	public void setAvailibility(String availibility) {
		this.availibility = availibility;
	}

	public String getLemail() {
		return lemail;
	}

	public void setLemail(String lemail) {
		this.lemail = lemail;
	}

	public String getLpassword() {
		return lpassword;
	}

	public void setLpassword(String lpassword) {
		this.lpassword = lpassword;
	}


	public String getLmobile() {
		return lmobile;
	}

	public void setLmobile(String lmobile) {
		this.lmobile = lmobile;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}

	public String getLicense_no() {
		return license_no;
	}

	public void setLicense_no(String license_no) {
		this.license_no = license_no;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "Lawyer [lid=" + lid + ", lname=" + lname + ", availibility=" + availibility + ", lemail=" + lemail
				+ ", lpassword=" + lpassword + ", lmobile=" + lmobile + ", experience="
				+ experience + ", domain=" + domain + ", license_no=" + license_no + ", city=" + city + ", state="
				+ state + ", pincode=" + pincode + "]";
	}

}
