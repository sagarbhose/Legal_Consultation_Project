package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Answer;
import com.example.demo.entity.Client;
import com.example.demo.entity.Ipc;
import com.example.demo.entity.Lawyer;
import com.example.demo.entity.Question;


public interface Service_Declaration {
	
//	IPC
	public List<Ipc> getAllIpc();
	public Ipc getByIpc(int ipc);

//	Client
	public List<Client> displayAllClients();
	public Client insertionOfClient(Client c);
	public Client getClientById(int id);
	public void updateClient(Client c);
	public void deleteClient(int id);
	public Client getClientByCredientials(String Username,String Password);
	
//	Lawyer
	public List<Lawyer> displayAllLawyers();
	public Lawyer insertionofLawyer(Lawyer l);
	public void updationofLayer(Lawyer l);
	public void deletionofLawyer(int id);
	public Lawyer getLawyerById(int id);
	public Lawyer getLawyerByCredientials(String Username,String Password);
	
//	Question
	public List<Question> displayAllQues();
	public Question getQuestionById(int id);
	public void insertQues(Question q);
	public void DeleteQuestion(int qid);
	
//	Answer
	public List<Answer> displayAllAns();
	public Answer displayAnsByLid(int Qid);
	public void insertAns(Answer a);
	
}
