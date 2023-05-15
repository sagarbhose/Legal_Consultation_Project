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
@Table(name = "Answer")
public class Answer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "aid")
	private int aid;

	@Column(name = "answer")
	private String answer;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "qid")
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lid")
    private Lawyer lawyer;

	public Answer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Answer(int aid, String answer) {
		super();
		this.aid = aid;
		this.answer = answer;
	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	@Override
	public String toString() {
		return "Answer [aid=" + aid + ", answer=" + answer + "]";
	}
	
	
}
