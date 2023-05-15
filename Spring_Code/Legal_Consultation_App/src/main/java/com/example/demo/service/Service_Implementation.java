package com.example.demo.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Client;
import com.example.demo.entity.Ipc;
import com.example.demo.entity.Lawyer;
import com.example.demo.persistance.Answer_Repository;
import com.example.demo.persistance.Client_Repository;
import com.example.demo.persistance.Lawyer_Repository;
import com.example.demo.persistance.Question_Repository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;




@Service
public class Service_Implementation implements Service_Declaration {

	private Lawyer_Repository lawyerRepo;
	private Client_Repository clientRepo;
	private Question_Repository questionRepo;
	private Answer_Repository answerRepo;
	private final ObjectMapper objectMap;
	
	public Service_Implementation(ObjectMapper objectMap) {
		super();
		this.objectMap = objectMap;
	}

	@Autowired
	public Service_Implementation(Client_Repository clientRepo, Lawyer_Repository lawyerRepo,
			Question_Repository questionRepo, Answer_Repository answerRepo) {
		this.objectMap = new ObjectMapper();
		this.clientRepo = clientRepo;
		this.lawyerRepo = lawyerRepo;
		this.questionRepo = questionRepo;
		this.answerRepo = answerRepo;
	}

	@Override
	@Transactional
	public List<Lawyer> displayAllLawyers() {
		// TODO Auto-generated method stub
		return lawyerRepo.findAll();
	}

	@Override
	@Transactional
	public Lawyer insertionofLawyer(Lawyer l) {
		// TODO Auto-generated method stub
		return lawyerRepo.save(l);
	}

	@Override
	@Transactional
	public void updationofLayer(Lawyer l) {
		// TODO Auto-generated method stub
		
		lawyerRepo.save(l);
	}

	@Override
	@Transactional
	public void deletionofLawyer(int id) {
		// TODO Auto-generated method stub
		
		lawyerRepo.deleteById(id);
	}

	@Override
	@Transactional
	public Lawyer getLawyerById(int id) {
		// TODO Auto-generated method stub
		return lawyerRepo.findById(id).get();
	}

	@Override
	@Transactional
	public List<Client> displayAllClients() {
		// TODO Auto-generated method stub
		return clientRepo.findAll();
	}

	@Override
	@Transactional
	public Client getClientById(int id) {
		// TODO Auto-generated method stub
		return clientRepo.findById(id).get();
	}

	@Override
	@Transactional
	public void updateClient(Client c) {
		// TODO Auto-generated method stub
		clientRepo.save(c);
		
	}

	@Override
	@Transactional
	public void deleteClient(int id) {
		// TODO Auto-generated method stub
		
		clientRepo.deleteById(id);
		
	}

	@Override
	@Transactional
	public Client insertionOfClient(Client c) {
		// TODO Auto-generated method stub
		return clientRepo.save(c);
	}
	
	public List<Ipc> getAllIpc() {
        List<Ipc> ipcList = null;

        try {
            byte[] jsonData = Files.readAllBytes(Path.of("src/main/resources/ipc_id.json"));
            ipcList = objectMap.readValue(jsonData, new TypeReference<List<Ipc>>() {});
        } catch (IOException e) {
            e.printStackTrace();
        }

        return ipcList;
    }
	@Override
	public Ipc getByIpc(int ipc) {
		Ipc ans=null;
		List<Ipc>l=getAllIpc();
		for(Ipc it:l) {
			if(ipc==it.getSection()) {
				ans=it;
			}
		}
		return ans;
	}


}
