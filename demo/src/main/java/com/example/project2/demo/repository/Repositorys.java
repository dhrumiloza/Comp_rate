package com.example.project2.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.project2.demo.model.Model;

@Repository
@CrossOrigin("http://localhost:3000")
public interface Repositorys extends MongoRepository<Model,String> {
	List<Model> findByJobTitleAndSkillLevelAndRegion(String jobTitle, String skillLevel, String region);

}