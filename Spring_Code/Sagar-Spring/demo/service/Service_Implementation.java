package com.example.demo.service;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Random;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Answer;
import com.example.demo.entity.Client;
import com.example.demo.entity.Ipc;
import com.example.demo.entity.Lawyer;
import com.example.demo.entity.Question;
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
	
	
	@Autowired
	private JavaMailSender mailSender;
	
	public String sendEmail(String toEmail, String subject ,String Body) {
		SimpleMailMessage message=new SimpleMailMessage();
		Body=generateOtp();
		message.setFrom("sagarbhose25@gmail.com");
		message.setTo(toEmail);
		message.setSubject(subject);
		message.setText(Body);
		mailSender.send(message);
		System.out.println("Sent Sucessfully");
		return Body;
	}
	
	public String generateOtp() {
		  String values="0123456789";
		    int len=5;
		      Random random=new Random();
		        StringBuilder otp=new StringBuilder(len);
		        for (int i = 0; i < len; i++) {
		            int index = random.nextInt(values.length());
		            char otpChar = values.charAt(index);
		            otp.append(otpChar);
		        }
		        return otp.toString();
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
	@Transactional
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

	@Override
	@Transactional
	public List<Question> displayAllQues() {
		return questionRepo.findAll();
	}

	@Override
	@Transactional
	public Question getQuestionById(int id) {
		return questionRepo.findById(id).get();
	}

	@Override
	@Transactional
	public void insertQues(Question q) {
		 questionRepo.save(q);
		
	}

	@Override
	@Transactional
	public List<Answer> displayAllAns() {
		return answerRepo.findAll();
	}

	@Override
	@Transactional
	public Answer displayAnsByLid(int id) {
		return answerRepo.findById(id).get();
	}

	@Override
	@Transactional
	public void insertAns(Answer a) {
		answerRepo.save(a);
		
	}

	@Override
	@Transactional
	public Client getClientByCredientials(String Username, String Password) {
		return clientRepo.getClientByCredientials(Username, Password);
	}

	@Override
	@Transactional
	public Lawyer getLawyerByCredientials(String Username, String Password) {
		return lawyerRepo.getLaywerByCredientials(Username, Password);
	}
	
	
	@Override
	@Transactional
	public void DeleteQuestion(int qid) {
		questionRepo.deleteById(qid);
	}
	

	
	
	

}
