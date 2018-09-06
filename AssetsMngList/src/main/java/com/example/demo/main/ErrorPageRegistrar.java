package com.example.demo.main;

import org.springframework.context.annotation.Bean;

public class ErrorPageRegistrar {

	@Bean
	public ErrorPageRegistrar errorPageRegistrar(){
		return new ErrorPageRegistrar();
	}
	
}
