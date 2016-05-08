package com.stefanie.autorepair.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stefanie.autorepair.model.entity.Supplier;

@Controller
@RequestMapping("supplier")
public class SupplierCtrl {

	@ResponseBody
	@RequestMapping("saveOrUpdateSupplier")
	public Object saveOrUpdateSupplier(@RequestParam(required=false) String id, @RequestParam String name, @RequestParam String phoneNumber){
		return Supplier.saveOrUpdate(id, name, phoneNumber);
	}
	
	@ResponseBody
	@RequestMapping(value = "getSupplierList", method = (RequestMethod.GET))
	public Object getSupplierList(){
		return Supplier.getSupplierList();
	}
}
