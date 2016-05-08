package com.stefanie.autorepair.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_instoragesheetEntity")
public class InStorageSheetEntity implements Serializable{

	/**
	 * 入库单表体
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", columnDefinition="BIGINT(50)", insertable=true, updatable=true, nullable=false)
	private Integer id;
	
	@JoinColumn(name = "sheetId", referencedColumnName = "id", nullable = false, updatable=true)
    @ManyToOne(optional = false, targetEntity = InStorageSheet.class)
    private InStorageSheet sheetId;
}
