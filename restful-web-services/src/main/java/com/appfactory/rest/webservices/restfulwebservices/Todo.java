package com.appfactory.rest.webservices.restfulwebservices;

import java.util.Date;

public class Todo {
	public int id ;
    public String description;
    public boolean done;
    public Date targetDate;
	public Todo(int id, String description, boolean done, Date targetDate) {
		super();
		this.id = id;
		this.description = description;
		this.done = done;
		this.targetDate = targetDate;
	}

}
