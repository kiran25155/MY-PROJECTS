<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<center><h1 style ="color:red">Employee Management System</h1></center>
<center>
<table>
<tr>
<td><a href="homepage.jsp">Home </a> &emsp13;  &emsp13;  &emsp13;  &emsp13;  &emsp13;</td>
<td><a href="About.jsp">About Us </a> &emsp13;  &emsp13; &emsp13; &emsp13;  &emsp13;</td>
<td><a href="contact.jsp">Contact Us</a> &emsp13;  &emsp13; &emsp13; &emsp13;  &emsp13;</td>
<td><a href="reg.jsp">Register </a> &emsp13;  &emsp13; &emsp13; &emsp13;  &emsp13;</td>
<td><a href="log.jsp">Login </a> &emsp13;  &emsp13; &emsp13; &emsp13;  &emsp13;</td>
</table>
<center>
<h1 style="coor:blue">New Employee Login Here</h1>
<table>
<form action="login.jsp" method="post">
<tr>
<td>email:</td>
<td><input type="email" name="emai"></td>
</tr>
<tr>
<td>Password:</td>
<td><input type="password" name="pswd"></td>
</tr>
<tr>
<td></td>
<td><center><input type="submit" value="Login"></center></td>
</tr>
</form>
</table>
</center>
</body>
</html>