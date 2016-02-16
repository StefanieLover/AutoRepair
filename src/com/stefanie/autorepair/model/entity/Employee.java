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
@Table(name = "t_employee")
public class Employee implements Serializable{
	public static final Logger log = Logger.getLogger(Employee.class);
	/**
	 * 员工Entity
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", columnDefinition="BIGINT(50)", insertable=true, updatable=true, nullable=false)
	private Integer id;
	
	@Column(name="name", columnDefinition="varchar(50)", insertable=true, updatable=true)
	private String name;
	
	@Column(name="phoneNumber", columnDefinition="varchar(50)", insertable=true, updatable=true)
	private String phoneNumber;
	
	public Employee(){
		
	}
	
	public Employee(Integer id, String name, String phoneNumber){
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
	}
	
	public Employee(String name, String phoneNumber){
		this.name = name;
		this.phoneNumber = phoneNumber;
	}
	
	@SuppressWarnings("unchecked")
	public static JSONObject saveOrUpdate(HttpServletRequest request){
		JSONObject json = new JSONObject();
		String id = request.getParameter("id");
		String name = request.getParameter("name");
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
		Employee entity = null;
		// 0是新增，否则是更新
		if(intId == 0){
			entity = new Employee(name, phoneNumber);
		} else{
			entity = new Employee(intId, name, phoneNumber);
		}
		try{			
			commonDao.getHibernateTemplate().saveOrUpdate(entity);
		}catch(DataAccessException e){
			log.error("saveOrUpdate Employee failed!", e);
			json.put("status", "failed");
			json.put("code", "EM_002");
			return json;
		}
		json.put("status", "success");
		return json;
	}
	
	public static Employee getCustomerById(CommonDao commonDao, Integer id){
		if(null == id || id == 0){
			return null;
		}
		return commonDao.getHibernateTemplate().get(Employee.class, id);
	}
}
