<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Register</title>
</head>
<body>
<center><h1 style ="color:red">Employee Management System</h1></center>
<table>
<tr>
<td><a href="homepage.jsp">Home </a> &emsp13;  &emsp13;  &emsp13;  &emsp13;  &emsp13;</td>
<td><a href="About.jsp">About Us </a> &emsp13;  &emsp13; &emsp13; &emsp13;  &emsp13;</td>
<td><a href="contact.jsp">Contact Us</a> &emsp13;  &emsp13; &emsp13; &emsp13;  &emsp13;</td>
<td><a href="reg.jsp">Register </a> &emsp13;  &emsp13; &emsp13; &emsp13;  &emsp13;</td>
<td><a href="log.jsp">Login </a> &emsp13;  &emsp13; &emsp13; &emsp13;  &emsp13;</td>
</tr></table>
<center><h1 style="color:orange">New Employee Register Here</h1></center>
<center></center>
<table>
<form action="Regis.jsp" method="post">
<tr>
<td>Name:</td>
<td><input type="text" name="name"></td></tr><tr>
<td>Password:</td>
<td><input type="password" name="psw"></td></tr>
<tr>
<td>Email:</td>
<td><input type="email" name="email"></td></tr>
<tr>
<td>Mobile number:</td>
<td><input type="text" name="number"></td></tr>
<tr>

<td>Gender:</td>
<td><input type="radio" name="gender">male &emsp; &emsp;
<input type="radio" name="gender">female
</td></tr>
<tr>
<td>Address:</td>
<td><textarea name="addr" rows="5" cols="40"></textarea></td></tr>

<tr><td>Country:</td>
<td>
<select name="country">
<option value="India">India</option>
<option value="Austrlia">Austrlia</option>
<option value="japan">japan</option>
<option value="indonesia">Indonesia</option>
<option value="Us">Us</option>
</select>
</td></tr>
<tr>
<td></td>
<td>
<input type="submit" value="Register"> &emsp; &emsp; &emsp; &emsp;
<input type="reset" value="Reset">
</td></tr>
</form>



</table>
</body>
</html>