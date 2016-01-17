package com.stefanie.autorepair.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

public class Employee implements Serializable{

	/**
	 * 员工Entity
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name="id", columnDefinition="varchar2(100 char)", insertable=true, updatable=true, nullable=false)
	private String id;
	
	@Column(name="name", columnDefinition="varchar2(50 char)", insertable=true, updatable=true)
	private String name;
	
	@Column(name="phoneNumber", columnDefinition="varchar2(50 char)", insertable=true, updatable=true)
	private String phoneNumber;
}
