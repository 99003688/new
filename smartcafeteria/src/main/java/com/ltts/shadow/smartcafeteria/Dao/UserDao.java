package com.ltts.shadow.smartcafeteria.Dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ltts.shadow.smartcafeteria.Models.Login;
import com.ltts.shadow.smartcafeteria.Models.User;

public interface UserDao extends JpaRepository<User, String> 
{
	
	@Query("SELECT u FROM User u WHERE u.username = ?1")
	public User findByUsername(String username);
	
//	abstract public User findByUsername(String username);
//	abstract public User findByUsernameAndPassword(String username, String password);
	

}

