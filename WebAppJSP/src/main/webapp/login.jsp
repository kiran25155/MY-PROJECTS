<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<% 
String email=request.getParameter("emai");
String password=request.getParameter("pswd");
try{
	Class.forName("oracle.jdbc.driver.OracleDriver");
	Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","sai","sai");

	PreparedStatement ps=con.prepareStatement("select * from emps where email=? and password=?");
	ps.setString(1,email);
	ps.setString(2,password);
	
	ResultSet rs=ps.executeQuery();
	if(rs.next())
{
	response.sendRedirect("UserHome.jsp");
}
	else if((email.equals("admin@a"))&&(password.equals("admin"))){
		
		response.sendRedirect("adminlog.jsp");
		
	}
	else{
		out.print("Please insert Valid user email and password");
	} 
}
catch(Exception e){
	out.print(e);
	
}
%>
</body>
</html>