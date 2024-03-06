package com.example.project2.demo.dto;

import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CompanyDTO {
	
	private String name;
    private double rate;
    private String status;

}