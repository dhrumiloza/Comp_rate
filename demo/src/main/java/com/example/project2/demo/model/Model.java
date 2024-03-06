package com.example.project2.demo.model;


	import org.springframework.data.annotation.Id;
	import org.springframework.data.mongodb.core.mapping.Document;

	import lombok.AllArgsConstructor;
	import lombok.Getter;
	import lombok.NoArgsConstructor;
	import lombok.Setter;

	@Getter
	@Setter
	@AllArgsConstructor
	@NoArgsConstructor
	@Document(collection="companies")
	public class Model {
		@Id
		
		private String id;
		private String name;
		private String jobTitle;
		private String skillLevel;
		private String region;
		private double rate;
		private String status;
	}


