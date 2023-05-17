package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Answer;

public interface Answer_Repository extends JpaRepository<Answer, Integer> {

}
