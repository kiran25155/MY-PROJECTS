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

String Query="update emps set password=?, email=?, moblie_num=?, address=? where name=?";
PreparedStatement ps=con.prepareStatement(Query);
ps.setString(1,password);
ps.setString(2,email);
ps.setString(3,moblie_num);
ps.setString(4,address);
ps.setString(5,name);
ResultSet rs=ps.executeQuery();
if(rs.next()){
	out.print("sucessfully Update");
}
else {
	
	out.print("invalid username");
}
con.close();
}
catch(Exception e){
	out.print(e);
}


%>

</body>
</html>