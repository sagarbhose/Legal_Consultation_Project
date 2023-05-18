package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Forum;

public interface Forum_Repository extends JpaRepository<Forum, Integer> {

}
