package com.example.project2.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.project2.demo.dto.CompanyDTO;
import com.example.project2.demo.service.Services;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class Controller {

    @Autowired
    private Services dropdownService;

    @GetMapping("/job-titles")
    public ResponseEntity<List<String>> getJobTitles() {
        List<String> jobTitles = dropdownService.getJobTitles();
        return ResponseEntity.ok(jobTitles);
    }

    @GetMapping("/skill-levels")
    public ResponseEntity<List<String>> getSkillLevels() {
        List<String> skillLevels = dropdownService.getSkillLevels();
        return ResponseEntity.ok(skillLevels);
    }

    @GetMapping("/regions")
    public ResponseEntity<List<String>> getRegions() {
        List<String> regions = dropdownService.getRegions();
        return ResponseEntity.ok(regions);
    }
    @GetMapping("/companies")
    public ResponseEntity<List<CompanyDTO>> getCompaniesByFilters(
            @RequestParam(value = "jobTitle", required = false) String jobTitle,
            @RequestParam(value = "skillLevel", required = false) String skillLevel,
            @RequestParam(value = "region", required = false) String region) {
        
        List<CompanyDTO> companies = dropdownService.getCompaniesByDropdowns(jobTitle, skillLevel, region);
        return ResponseEntity.ok(companies);
    }
}