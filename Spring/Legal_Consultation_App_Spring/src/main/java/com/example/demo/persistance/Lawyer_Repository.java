package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.example.demo.entity.Lawyer;

public interface Lawyer_Repository extends JpaRepository<Lawyer, Integer> {
	@Query("from Lawyer where  lemail =?1 and lpassword=?2")
	public Lawyer getLaywerByCredientials(String  lemail ,String lpassword);
	
	@Query("from Lawyer where lemail=?1")
	public Lawyer getLawyerByEmail(String lemail);
	
	public Lawyer findByLname(String lname);
}
