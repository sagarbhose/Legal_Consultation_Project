package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Client;
import com.example.demo.entity.Ipc;
import com.example.demo.entity.Lawyer;


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
	
//	Lawyer
	public List<Lawyer> displayAllLawyers();
	public Lawyer insertionofLawyer(Lawyer l);
	public void updationofLayer(Lawyer l);
	public void deletionofLawyer(int id);
	public Lawyer getLawyerById(int id);
	
//	Question
	
//	Answer
	
}
