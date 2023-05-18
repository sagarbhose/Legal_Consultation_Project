package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Forum")
public class Forum {

	public Forum() {
		super();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="qtitle")
	private String qtitle;
	
	@Column(name="qdesc")
	private String qdesc;
	
	@Column(name="answer")
	private String answer;
	
	
	public Forum(int id, String qtitle, String qdesc, String answer) {
		this.id = id;
		this.qtitle = qtitle;
		this.qdesc = qdesc;
		this.answer = answer;
	}
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQtitle() {
		return qtitle;
	}

	public void setQtitle(String qtitle) {
		this.qtitle = qtitle;
	}

	public String getQdesc() {
		return qdesc;
	}

	public void setQdesc(String qdesc) {
		this.qdesc = qdesc;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	
	
}
