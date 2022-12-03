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
try
{
String name=request.getParameter("name");
Class.forName("oracle.jdbc.driver.OracleDriver");
Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","sai","sai");
PreparedStatement ps=con.prepareStatement("delete from emps where name=?");
ps.setString(1,name);
ResultSet rs=ps.executeQuery();
if(rs.next()){
out.print("<center>"+"<h1>"+"<font color=Black>"+"you record Deleted successfully "+"</h1>"+"</center>");
response.sendRedirect("showMyRecord.jsp"+"<target='b'>");

}
else{
	out.println("please enter valid name");
}
con.close();
}
catch(Exception e){
	out.print(e);
}
%>

</body>
</html>