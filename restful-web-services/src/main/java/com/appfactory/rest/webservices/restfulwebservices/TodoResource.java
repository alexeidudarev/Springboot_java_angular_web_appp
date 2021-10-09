package com.appfactory.rest.webservices.restfulwebservices;

import java.util.Date;
import java.util.List;

import org.apache.juli.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.appfactory.rest.webservices.restfulwebservices.hellowrorld.TodoBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResource {
	@Autowired(required=true)
	private TodoHardcodedService todoService;
	
	//@GetMapping(path="/users/{username}/todos")
	//public List<Todo> getAllTodos(@PathVariable String username){
	//	return todoService.findAll();
	//}
	
	@GetMapping(path="/users/{username}/todos")
	public List<TodoBean> getAllTodos(@PathVariable String username){
		System.out.println(todoService.findAll());
		return todoService.findAll();
		
	}

}
