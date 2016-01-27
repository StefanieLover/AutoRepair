package com.stefanie.autorepair.controller;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("repairSheet")
public class RepairSheetCtrl {
	
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping("getAllRepairSheets")
	public JSONObject getAllRepairSheets(@RequestParam String name){
		JSONObject json = new JSONObject();
		json.put("name", name);
		return json;
	}
	
}
