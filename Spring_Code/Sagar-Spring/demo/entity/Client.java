package com.example.demo.entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Client")
public class Client {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cid")
	private int cid;
	
	@Column(name = "cname")
	private String cname;
	
	@Column(name = "caddress")
	private String caddress;
	
	@Column(name = "cemail")
	private String cemail;
	
	@Column(name = "cpass")
	private String cpass;
	
	@Column(name = "cmoblile")
	private String cmoblie;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "pincode")
	private String pincode;
	
	 @ManyToOne(fetch = FetchType.LAZY)
	 @JoinColumn(name = "lid")
	 private Lawyer lawyer;
	

	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Client(int cid, String cname, String caddress, String cemail, String cpass, String cmoblie, String city,
			String state, String pincode) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.caddress = caddress;
		this.cemail = cemail;
		this.cpass = cpass;
		this.cmoblie = cmoblie;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getCaddress() {
		return caddress;
	}

	public void setCaddress(String caddress) {
		this.caddress = caddress;
	}

	public String getCemail() {
		return cemail;
	}

	public void setCemail(String cemail) {
		this.cemail = cemail;
	}

	public String getCpass() {
		return cpass;
	}

	public void setCpass(String cpass) {
		this.cpass = cpass;
	}

	public String getCmoblie() {
		return cmoblie;
	}

	public void setCmoblie(String cmoblie) {
		this.cmoblie = cmoblie;
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
		return "Client [cid=" + cid + ", cname=" + cname + ", caddress=" + caddress + ", cemail=" + cemail + ", cpass="
				+ cpass + ", cmoblie=" + cmoblie + ", city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
	}
	
}
