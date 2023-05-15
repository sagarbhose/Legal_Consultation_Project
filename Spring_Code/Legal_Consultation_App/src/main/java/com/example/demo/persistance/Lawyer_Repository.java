package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Lawyer;

public interface Lawyer_Repository extends JpaRepository<Lawyer, Integer> {

}
