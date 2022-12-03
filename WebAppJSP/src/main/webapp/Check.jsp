<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</ title>
</head>
<body>
<%! void check_num(int n){
	if(check_num(24)%2==0){
    <%= "even" %>
	}
	else {
	<%= "odd" %>
	}
}
%>
</body>
</html>