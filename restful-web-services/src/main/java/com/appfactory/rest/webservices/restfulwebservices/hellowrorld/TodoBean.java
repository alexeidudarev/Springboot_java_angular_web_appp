package com.appfactory.rest.webservices.restfulwebservices.hellowrorld;

import java.util.Date;

public class TodoBean {
	
	public int id ;
    public String description;
    public boolean done;
    public Date targetDate;
  
	public TodoBean(int id, String description, boolean done, Date targetDate) {
		super();
		this.id = id;
		this.description = description;
		this.done = done;
		this.targetDate = targetDate;
	}
	
	@Override
	public String toString() {
		return "TodoBean [id=" + id + ", description=" + description + ", done=" + done + ", targetDate=" + targetDate
				+ "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
}
