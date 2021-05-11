package com.ltts.shadow.smartcafeteria.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.ltts.shadow.smartcafeteria.Models.CurrentOccupancy;

@Repository
public interface CurrentOccupancyDao extends PagingAndSortingRepository<CurrentOccupancy, Long> {

	
}
