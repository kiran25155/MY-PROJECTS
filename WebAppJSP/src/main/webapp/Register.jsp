<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body><center>
<fieldset width="50px">
<table boarder="2">
<form action="RegisterationForm.jsp" method="get">
<tr>
<td>Enter Your Name:</td>
<td colspan='3'><input type="text" name="name"></td>
</tr>
<tr>
<td>Enter Your password:</td>
<td colspan='3'><input type="text" name="password"></td>
</tr>
<tr>
<td>Conform Your password:</td>
<td colspan='3'><input type="text" name="conform password"></td>
</tr>
<tr>
<td>Gender:</td>
<td ><input type="radio" name="gender">male</td>
<td  colspan='2'><input type="radio" name="gender">female</td>
</tr>
<tr>
<td>Courses:</td>
<td colspan='2'><select name="course" multiple>
<option value="java">Java</option>
<option value="python">Python</option>
<option value=".Net" >.Net</option>
<option value="Hadoop">Hadoop</option>
</select>
</td>
</tr>

<td>Qualification:</td>
<td colspan='2'><select name="qualification">
<option value="ssc">Ssc</option>
<option value="Inter">Intermediate</option>
<option value="B.tech">B.tech</option>
<option value="Ms">Ms</option>
</select>
</td>
</tr>
<td>Hobbies:</td>
<td><input type="checkbox" name="hobbies" value="chartting">chartting</td>
<td><input type="checkbox" name="hobbies" value="programms" >programms</td>
<td><input type="checkbox" name="hobbies" value="gaming">gaming</td>
</tr>
<tr><td>Address</td>
<td colspan='3'><textarea name="address" rows="5" cols="40"></textarea><td>
</td>
<tr><td></td>
<td><input type="submit" value="Register"></td></tr>
</form>

</table>
</fieldset>
</center>
</body>
</html>