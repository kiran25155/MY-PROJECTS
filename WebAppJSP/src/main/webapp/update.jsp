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
</center>
<center><h1>Update Employee record</h1></center>
<center>
<fieldset>
<table>
<form action="updateEmp.jsp" method="post">


<tr><td>Name:</td>
<td><input type="text" name="name"></td>
</tr>
<tr>
<td>Password:</td>
<td><input type="password" name="psw"></td></tr>
<tr>
<td>Email:</td>
<td><input type="email" name="email"></td></tr>
<tr>
<td>Mobile number:</td>
<td><input type="text" name="number"></td></tr>



<tr>
<td>Address:</td>
<td><textarea name="addr" rows="5" cols="40"></textarea></td></tr>


<tr>
<td></td>
<td>
<center>
<input type="submit" value="Update">
</center>
</td></tr>
</form></table>
</fieldset></center>
<script>

</script>
</body>
</html>