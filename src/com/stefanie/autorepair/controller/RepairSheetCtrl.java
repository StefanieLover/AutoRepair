package com.stefanie.autorepair.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("repairSheet")
public class RepairSheetCtrl {
	
	@RequestMapping("getAllRepairSheets")
	public void getAllRepairSheets(@RequestParam String name){
		
	}

}
