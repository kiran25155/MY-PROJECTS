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
<table border=1>
<%
try{
Class.forName("oracle.jdbc.driver.OracleDriver");
Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","sai","sai");
PreparedStatement ps=con.prepareStatement("select * from emps");
ResultSet rs=ps.executeQuery();
ResultSetMetaData rss=rs.getMetaData();
int n=rss.getColumnCount();
for(int i=1;i<=n;i++)
	out.println("<td><font color=blue size=4>"+"<br>"+rss.getColumnName(i));
out.println("<tr>");
while(rs.next())
{
	for(int i=1;i<=n;i++)
		out.println("<td><br>"+rs.getString(i));
	out.println("<tr>");
	
}
out.println("</table>");
}
catch(Exception e)
{
	out.println(e);
}
%>

</body>
</html>