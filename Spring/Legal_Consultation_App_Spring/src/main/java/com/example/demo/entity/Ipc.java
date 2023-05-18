package com.example.demo.entity;

public class Ipc {
	
	    private int chapter;
	    private int section;
	    private String chapter_title;
	    private String section_title;
	    private String section_desc;

	    // Constructors, getters, and setters

	    public Ipc() {
	    	
	    }

	    public Ipc(int chapter, String chapter_title, int section, String section_title, String section_desc) {
	        this.chapter = chapter;
	        this.section = section;
	        this.chapter_title = chapter_title;
	        this.section_title = section_title;
	        this.section_desc = section_desc;
	    }

	    public int getChapter() {
	        return chapter;
	    }

	    public void setChapter(int chapter) {
	        this.chapter = chapter;
	    }

	    public int getSection() {
	        return section;
	    }

	    public void setSection(int section) {
	        this.section = section;
	    }

	    public String getChapter_title() {
	        return chapter_title;
	    }

	    public void setChapter_title(String chapter_title) {
	        this.chapter_title = chapter_title;
	    }

	    public String getSection_title() {
	        return section_title;
	    }

	    public void setSection_title(String section_title) {
	        this.section_title = section_title;
	    }

	    public String getSection_desc() {
	        return section_desc;
	    }

	    public void setSection_desc(String section_desc) {
	        this.section_desc = section_desc;
	    }

}
