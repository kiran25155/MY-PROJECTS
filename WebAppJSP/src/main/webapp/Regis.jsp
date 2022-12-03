<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import ="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String name=request.getParameter("name");
String password=request.getParameter("psw");
String email=request.getParameter("email");
String moblie_num=request.getParameter("number");
String gender=request.getParameter("gender");
String address=request.getParameter("addr");
String country=request.getParameter("country");


try{
Class.forName("oracle.jdbc.driver.OracleDriver");
Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","sai","sai");
PreparedStatement ps=con.prepareStatement("insert into emps values(?,?,?,?,?,?,?)");
ps.setString(1,name);
ps.setString(2,password);
ps.setString(3,email);	
ps.setString(4,moblie_num);
ps.setString(5,gender);
ps.setString(6,address);
ps.setString(7,country);
int i=ps.executeUpdate();

out.print(i+ "you are sucessfully Registered");
con.close();
}
catch(Exception e){
	out.print(e);
}


%>
</body>
</html>