package com.stefanie.autorepair.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.springframework.dao.DataAccessException;

import com.stefanie.autorepair.model.ApplicationContextBean;
import com.stefanie.autorepair.model.dao.CommonDao;

@Entity
@Table(name = "t_customer")
public class Customer implements Serializable{
	public static final Logger log = Logger.getLogger(Customer.class);
	/**
	 * 客户Entity
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", columnDefinition="BIGINT(50)", insertable=true, updatable=true, nullable=false)
	private Integer id;
	
	@Column(name="name", columnDefinition="varchar(50)", insertable=true, updatable=true)
	private String name;
	
	@Column(name="carCardNumber", columnDefinition="varchar(50)", insertable=true, updatable=true)
	private String carCardNumber;
	
	@Column(name="carType", columnDefinition="varchar(50)", insertable=true, updatable=true)
	private String carType;
	
	@Column(name="phoneNumber", columnDefinition="varchar(50)", insertable=true, updatable=true)
	private String phoneNumber;
	
	public Customer(){
		
	}
	
	public Customer(Integer id, String name, String carCardNumber, String carType, String phoneNumber){
		this.id = id;
		this.name = name;
		this.carCardNumber = carCardNumber;
		this.carType = carType;
		this.phoneNumber = phoneNumber;
	}
	
	public Customer(String name, String carCardNumber, String carType, String phoneNumber){
		this.name = name;
		this.carCardNumber = carCardNumber;
		this.carType = carType;
		this.phoneNumber = phoneNumber;
	}
	
	@SuppressWarnings("unchecked")
	public static JSONObject saveOrUpdate(HttpServletRequest request){
		JSONObject json = new JSONObject();
		String id = request.getParameter("id");
		String name = request.getParameter("name");
		String carCardNumber = request.getParameter("carCardNumber");
		String carType = request.getParameter("carType");
		String phoneNumber = request.getParameter("phoneNumber");
		Integer intId = Integer.parseInt(id);
		CommonDao commonDao = (CommonDao)ApplicationContextBean.getBean("commonDao");
		/** 有待评估是否需要 
		existCustomer = getCustomerById(commonDao, intId);
		if(null == existCustomer){
			json.put("status", "failed");
			json.put("code", "CT_001");
			return json;
		}*/
		Customer entity = null;
		// 0是新增，否则是更新
		if(intId == 0){
			entity = new Customer(name, carCardNumber, carType, phoneNumber);
		} else{
			entity = new Customer(intId, name, carCardNumber, carType, phoneNumber);
		}
		try{			
			commonDao.getHibernateTemplate().saveOrUpdate(entity);
		}catch(DataAccessException e){
			log.error("saveOrUpdate Customer failed!", e);
			json.put("status", "failed");
			json.put("code", "CT_002");
			return json;
		}
		json.put("status", "success");
		return json;
	}
	
	public static Customer getCustomerById(CommonDao commonDao, Integer id){
		if(null == id || id == 0){
			return null;
		}
		return commonDao.getHibernateTemplate().get(Customer.class, id);
	}
	
}
