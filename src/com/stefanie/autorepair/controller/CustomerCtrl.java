package com.stefanie.autorepair.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stefanie.autorepair.model.entity.Customer;

@Controller
@RequestMapping("customer")
public class CustomerCtrl {
	
	@ResponseBody
	@RequestMapping("saveOrUpdateCustomer")
	public Object saveOrUpdateCustomer(HttpServletRequest request){
		return Customer.saveOrUpdate(request);
	}
	
	@ResponseBody
	@RequestMapping("getCustomerList")
	public Object getCustomerList(HttpServletRequest request){
		return Customer.getCustomerList();
	}
}
