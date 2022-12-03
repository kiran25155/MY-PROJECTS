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
String fname=request.getParameter("fname");
String sname=request.getParameter("sname");
out.print("Full Name:"+fname+" "+sname);
%>

</body>
</html>