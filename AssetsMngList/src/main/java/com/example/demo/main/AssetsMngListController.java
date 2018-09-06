package com.example.demo.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AssetsMngListController {

	@GetMapping("/")
    public String welcome() {
        return "index";
    }
	
	@GetMapping("/vet")
    public String vetList() {
        return "vetList.html";
    }
	
	
	@GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
