package com.stefanie.autorepair.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_instoragesheet")
public class InStorageSheet implements Serializable{

	/**
	 * 入库单Entity
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", columnDefinition="BIGINT(50)", insertable=true, updatable=true, nullable=false)
	private Integer id;
	
	@Column(name="name", columnDefinition="varchar(50)", insertable=true, updatable=true)
	private String name;
	
	@Column(name="supplierId", columnDefinition="varchar(50)", insertable=true, updatable=true)
	private String supplierId;
	
	
}
