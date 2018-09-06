package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer{
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		// 주의 addResourceLocations를 사용할때 반드시 /로 끝나야함.
		// /이걸로 끝나지 않으면 매핑이 잘 안됨.
		registry.addResourceHandler("/templates/**")
				.addResourceLocations("classpath:/templates/")
				.setCachePeriod(20); // 클래스 패스 기준으로 templates 밑
				
	}
}
