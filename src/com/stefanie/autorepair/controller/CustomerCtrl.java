package com.stefanie.autorepair.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stefanie.autorepair.model.entity.Customer;

@Controller
@RequestMapping("customer")
public class CustomerCtrl {
	
	@ResponseBody
	@RequestMapping("saveOrUpdateCustomer")
	public Object saveOrUpdateCustomer(@RequestParam(required=false) String id, @RequestParam String name, @RequestParam String carCardNumber, 
			@RequestParam String carType, @RequestParam String phoneNumber){
		return Customer.saveOrUpdate(id, name, carCardNumber, carType, phoneNumber);
	}
	
	@ResponseBody
	@RequestMapping(value = "getCustomerList", method = (RequestMethod.GET))
	public Object getCustomerList(){
		return Customer.getCustomerList();
	}
}
