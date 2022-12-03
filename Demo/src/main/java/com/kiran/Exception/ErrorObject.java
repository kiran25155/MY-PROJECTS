package com.kiran.Exception;

public class ErrorObject {
	private Integer statusCode;
	private String statusText;
	private long timestamp;
	
	public ErrorObject() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ErrorObject(Integer statusCode, String statusText, long timestamp) {
		super();
		this.statusCode = statusCode;
		this.statusText = statusText;
		this.timestamp = timestamp;
	}

	public Integer getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}

	public String getStatusText() {
		return statusText;
	}

	public void setStatusText(String statusText) {
		this.statusText = statusText;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	@Override
	public String toString() {
		return "ErrorObject [statusCode=" + statusCode + ", statusText=" + statusText + ", timestamp=" + timestamp
				+ "]";
	}
	
	
	

}
