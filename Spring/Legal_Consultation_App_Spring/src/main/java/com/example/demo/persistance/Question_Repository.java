package com.example.demo.persistance;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Question;

public interface Question_Repository extends JpaRepository<Question, Integer > {

}
