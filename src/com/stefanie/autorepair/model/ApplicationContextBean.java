package com.stefanie.autorepair.model;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.ContextLoaderListener;

public class ApplicationContextBean {
	public static ApplicationContext applicationContext = null;
	
	public static Object getBean(String beanName){
		if(applicationContext == null){
			applicationContext = ContextLoaderListener.getCurrentWebApplicationContext();
			return applicationContext.getBean(beanName);
		}
		return applicationContext.getBean(beanName);
	}
}
