package com.stefanie.autorepair.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;


@Entity
@Table(name = "t_customer")
public class Customer implements Serializable{

	/**
	 * 客户Entity
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name="id", columnDefinition="varchar2(100 char)", insertable=true, updatable=true, nullable=false)
	private String id;
	
	@Column(name="name", columnDefinition="varchar2(50 char)", insertable=true, updatable=true)
	private String name;
	
	@Column(name="carCardNumber", columnDefinition="varchar2(50 char)", insertable=true, updatable=true)
	private String carCardNumber;
	
	@Column(name="carType", columnDefinition="varchar2(50 char)", insertable=true, updatable=true)
	private String carType;
	
	@Column(name="phoneNumber", columnDefinition="varchar2(50 char)", insertable=true, updatable=true)
	private String phoneNumber;
	
}
