package com.appfactory.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.appfactory.rest.webservices.restfulwebservices.hellowrorld.HelloWorldBean;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloController {
	
	@RequestMapping(method=RequestMethod.GET,path="/hello")
	public String hello(){
		return "Hello";
	}
	@GetMapping(path="/hello-world")
	public String helloWorld(){
		return "Hello World";
	}
	
	//http://localhost:8080/hello-world-bean
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean(){
		return new HelloWorldBean("Hello World changed");
		//throw new RuntimeException("Some error happend ! Contact Support at ***-*** !");
	}
	////http://localhost:8080/hello-world-bean/path-variable/
	@GetMapping(path="/hello-world-bean/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
		return new HelloWorldBean(String.format("Hello World, %s",name));
	}
}
