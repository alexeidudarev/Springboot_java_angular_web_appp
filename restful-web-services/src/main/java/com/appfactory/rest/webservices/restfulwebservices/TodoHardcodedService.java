package com.appfactory.rest.webservices.restfulwebservices;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.context.annotation.Configuration;

import com.appfactory.rest.webservices.restfulwebservices.hellowrorld.TodoBean;
@Configuration
public class TodoHardcodedService {

	//(1,'Learn to dance',false,new Date()),
	public List<TodoBean> findAll() {
		 List<TodoBean> list2 = Arrays.asList(
				new TodoBean(1,"Learn dance",false,new Date(System.currentTimeMillis())),
				new TodoBean(2,"Learn sing",false,new Date(System.currentTimeMillis())),
			 	new TodoBean(3,"Learndrive",false,new Date(System.currentTimeMillis()))
			 );
		return list2;
		
	}

	

}
