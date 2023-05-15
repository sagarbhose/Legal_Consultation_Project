package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class Email {
	@Autowired
	private JavaMailSender mailSender;
	
	public void sendEmail(String toEmail, String subject ,String Body) {
		SimpleMailMessage message=new SimpleMailMessage();
		message.setFrom("sagarbhose25@gmail.com");
		message.setTo(toEmail);
		message.setSubject(subject);
		message.setText(Body);
		mailSender.send(message);
		System.out.println("Sent Sucessfully");
	}
}
