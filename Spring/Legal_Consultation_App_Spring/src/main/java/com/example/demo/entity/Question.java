package com.example.demo.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Question")
public class Question {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "qid")
    private int qid;

	@Column(name = "qtitle")
    private String qtitle;

	@Column(name = "qdesc")
    private String qdesc;
	
	@Column(name = "domain")
	private String domain;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cid")
	private Client client;
	
	@OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    private List<Answer> answers;

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Question(int qid, String qtitle, String qdesc, String domain) {
		super();
		this.qid = qid;
		this.qtitle = qtitle;
		this.qdesc = qdesc;
		this.domain = domain;
	}

	public int getQid() {
		return qid;
	}

	public void setQid(int qid) {
		this.qid = qid;
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

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}

	@Override
	public String toString() {
		return "Question [qid=" + qid + ", qtitle=" + qtitle + ", qdesc=" + qdesc + ", domain=" + domain + "]";
	}
}
