package com.example.project2.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.project2.demo.dto.CompanyDTO;
import com.example.project2.demo.model.Model;
import com.example.project2.demo.repository.Repositorys;
import com.example.project2.demo.servicesInterface.ServicesInterface;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@Service
public class Services implements ServicesInterface {

    @Autowired
    private Repositorys repository;

    @Override
    public List<String> getJobTitles() {
        return repository.findAll().stream()
                .map(Model::getJobTitle)
                .distinct()
                .collect(Collectors.toList());
    }

    @Override
    public List<String> getSkillLevels() {
        return repository.findAll().stream()
                .map(Model::getSkillLevel)
                .distinct()
                .collect(Collectors.toList());
    }

    @Override
    public List<String> getRegions() {
        return repository.findAll().stream()
                .map(Model::getRegion)
                .distinct()
                .collect(Collectors.toList());
    }
    public List<CompanyDTO> getCompaniesByDropdowns(String jobTitle, String skillLevel, String region) {
        List<Model> companies = repository.findByJobTitleAndSkillLevelAndRegion(jobTitle, skillLevel, region);
        
        List<CompanyDTO> companyDTOs = new ArrayList<>();
        for (Model company : companies) {
            CompanyDTO dto = new CompanyDTO();
            dto.setName(company.getName());
            dto.setRate(company.getRate());
            dto.setStatus(company.getStatus());
            companyDTOs.add(dto);
        }
        
        return companyDTOs;
    }
}