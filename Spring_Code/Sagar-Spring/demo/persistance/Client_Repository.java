package com.example.demo.persistance;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Client;

public interface Client_Repository extends JpaRepository<Client, Integer> {

	@Query("from Client where cemail=?1 and cpass=?2")
	public Client getClientByCredientials(String cemail,String cpass);
}

//@Query("from Employee where first_name=?1 or last_name=?2")
//public List<Employee> searchByName(String first_name,String last_name);
