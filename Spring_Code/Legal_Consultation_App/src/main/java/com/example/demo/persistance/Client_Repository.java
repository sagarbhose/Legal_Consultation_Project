package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Client;

public interface Client_Repository extends JpaRepository<Client, Integer> {

}
