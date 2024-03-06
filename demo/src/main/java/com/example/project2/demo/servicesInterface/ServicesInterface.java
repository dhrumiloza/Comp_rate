package com.example.project2.demo.servicesInterface;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.project2.demo.dto.CompanyDTO;


@CrossOrigin(origins = "http://localhost:3000")
public interface ServicesInterface {
	List<String> getJobTitles();
    List<String> getSkillLevels();
    List<String> getRegions();
    List<CompanyDTO> getCompaniesByDropdowns(String jobTitle, String skillLevel, String region);

}