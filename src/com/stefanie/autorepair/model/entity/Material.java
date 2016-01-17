package com.stefanie.autorepair.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

public class Material implements Serializable{

	/**
	 * 物料Entity
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name="id", columnDefinition="varchar2(100 char)", insertable=true, updatable=true, nullable=false)
	private String id;
	
	@Column(name="name", columnDefinition="varchar2(50 char)", insertable=true, updatable=true)
	private String name;
	
	@Column(name="purchasePrice", columnDefinition="number(50 char)", insertable=true, updatable=true)
	private String purchasePrice;
	
	@Column(name="sellPrice", columnDefinition="number(50 char)", insertable=true, updatable=true)
	private String sellPrice;
	
	@Column(name="unit", columnDefinition="number(50 char)", insertable=true, updatable=true)
	private String unit;
}
