package com.ltts.shadow.smartcafeteria.Models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "currentoccupancy")
public class CurrentOccupancy {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private long id;
	
	@Column(name="curOcc")
	private int curOcc;
	
	@CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
     private Date date;

	public Long getid() {
		return id;
	}

	public void setid(Long id) {
		this.id = id;
	}

	public int getCurOcc() {
		return curOcc;
	}

	public void setCurOcc(int curOcc) {
		this.curOcc = curOcc;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public CurrentOccupancy(Long id, int curOcc, Date date) {
		super();
		this.id = id;
		this.curOcc = curOcc;
		this.date = date;
	}

	public CurrentOccupancy() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "CurrentOccupancy [id=" + id + ", curOcc=" + curOcc + ", date=" + date + "]";
	}

	
	
	

}
