package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Client;
import com.example.demo.entity.Ipc;
import com.example.demo.entity.Lawyer;
import com.example.demo.service.Service_Implementation;

@RestController
@RequestMapping("/app")
public class Legal_Consultation_App_Controller {

	private Service_Implementation serviceImp;

	@Autowired
	public Legal_Consultation_App_Controller(Service_Implementation serviceImp) {
		super();
		this.serviceImp = serviceImp;
	}
	
	@GetMapping("/ipclist")
    public List<Ipc> getAllIpc() {
        return serviceImp.getAllIpc();
    }
    
    @GetMapping("/ipclist/{id}")
    public Ipc getByIpc(@PathVariable("id")int ipc) {
    	return serviceImp.getByIpc(ipc);
    }

	
//	CLIENT CONTROLLER
	
	@GetMapping("/clientlist")
	public List<Client> getAllClient()
	{
		List<Client> clients = serviceImp.displayAllClients();
		
		return clients;
	}
	
	
	@PostMapping("/clientlist")
	public void  insertingClient(@RequestBody Client c)
	{
		serviceImp.insertionOfClient(c);
	}
	
	@PutMapping("/clientlist")
	public String updatingClient(@RequestBody Client c)
	{
		serviceImp.updateClient(c);
		return "client Updated Successfully";
	}
	
	@DeleteMapping("/clientlist/{id}")
	public void deletingclient(@PathVariable("id") int id)
	{
		Client c = serviceImp.getClientById(id);
		
		if(c == null)
		{
			throw new RuntimeException("Client not found with given id");
		}
		serviceImp.deleteClient(id);
//		return "Student Deleted with id : " + id;
	}
	
	@GetMapping("/clientbyid/{id}")
	public Client getingClientById(@PathVariable("id") int id)
	{
		Client c = serviceImp.getClientById(id);
		
		if(c == null)
		{
			throw new RuntimeException("Client Not found With given Id");
		}
		
		return c;
	}
	
	
//	LAWYER CONTROLLER
	@GetMapping("/lawyerlist")
	public List<Lawyer> getAllLawyers()
	{
		List<Lawyer> students = serviceImp.displayAllLawyers();
		
		return students;
	}
	
	@PostMapping("/lawyerlist")
	public void insertingLawyer(@RequestBody Lawyer l)
	{
//		return serviceImp.insertionofLawyer(l);
		
		serviceImp.insertionofLawyer(l);
		
	}
	
	@PutMapping("/lawyerlist")
	public String updatingLawyer(@RequestBody Lawyer l)
	{
		serviceImp.updationofLayer(l);
		return "lawyer Updated Successfully";
	}
	
	
	@DeleteMapping("/lawyerlist/{id}")
	public void deletingLawyer(@PathVariable("id") int id)
	{
		Lawyer l = serviceImp.getLawyerById(id);
		
		if(l == null)
		{
			throw new RuntimeException("Lawyer not found with given id");
		}
		serviceImp.deletionofLawyer(id);
//		return "Student Deleted with id : " + id;
	}
	
	
	@GetMapping("/lawyerbyid/{id}")
	public Lawyer getingLawyerById(@PathVariable("id") int id)
	{
		Lawyer l = serviceImp.getLawyerById(id);
		
		if(l == null)
		{
			throw new RuntimeException("Lawyer Not found With given Id");
		}
		
		return l;
	}
	
	
	
	
}
