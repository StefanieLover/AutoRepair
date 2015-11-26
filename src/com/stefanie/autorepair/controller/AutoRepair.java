package com.stefanie.autorepair.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AutoRepair {
		@RequestMapping({"/AutoRepair", "/AutoRepair/*"})
		public String directToIndex(){
			return "/index";
		}
}
