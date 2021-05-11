package com.ltts.shadow.smartcafeteria.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ltts.shadow.smartcafeteria.Dao.CurrentOccupancyDao;
import com.ltts.shadow.smartcafeteria.Models.CurrentOccupancy;
import com.ltts.shadow.smartcafeteria.Scheduler.CurrentOccupancyScheduler;
import com.ltts.shadow.smartcafeteria.Services.CurrentOccupancyService;

@CrossOrigin("http://localhost:4200")
@RestController
public class SchedulerController {
	
	

	@Autowired
	private CurrentOccupancyScheduler cos;
	
	@Autowired
	private CurrentOccupancyService currentOccupancyService;
	
	@GetMapping("/getCurrentOccupancy")
	public Iterable<CurrentOccupancy> getCurrentOccupancy()
	{
		return cos.getCurrentOccupancy();
	}
	
	@RequestMapping("/page")
	public ResponseEntity<List<CurrentOccupancy>> getAllEmployment( @RequestParam(defaultValue = "0") Integer pageNo, 
    @RequestParam(defaultValue = "48") Integer pageSize,
    @RequestParam(defaultValue = "id") String sortBy) {
	
		List<CurrentOccupancy> list = currentOccupancyService.getAlldata(pageNo, pageSize, sortBy);
		return new ResponseEntity<List<CurrentOccupancy>>(list, new HttpHeaders(), HttpStatus.OK); 
		
	
		
		
	}


}
