<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String name=request.getParameter("name");
String password=request.getParameter("password");
String conformPassword=request.getParameter("conform password");
String gender=request.getParameter("gender");
String []course=request.getParameterValues("course");
String []qualification=request.getParameterValues("qualification");
String []hobbie=request.getParameterValues("hobbies");
String address=request.getParameter("address");

    
     if(password.equals(conformPassword)){
    	 out.print("Name: "+name+"<br>");
     out.print("courses <br>");
	for(String courses:course){
	out.print(courses+"<br>");
	}
	out.print("qualifications <br>");
	for(String qualifications: qualification){  
		out.print(qualifications+"<br>");
	}
	for(String hobbies: hobbie){
		out.print("Hobbies:"+hobbies+"<br>");
	}
	out.print("address:"+address);
     }
     else{
    	 out.print("password and conform password must be same");
     }

%>

</body>
</html>