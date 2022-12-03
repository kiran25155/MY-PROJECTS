package com.kiran.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalException {
     @ExceptionHandler
	public ResponseEntity<ErrorObject> handleResourceNotFound(ResourceNotFoundException ex){
		ErrorObject eObject=new ErrorObject();
		eObject.setStatusCode(202);
		eObject.setStatusText(ex.getMessage());
		eObject.setTimestamp(System.currentTimeMillis());
		return new ResponseEntity<ErrorObject>(eObject,HttpStatus.ACCEPTED);
	}
     
    
     
}
