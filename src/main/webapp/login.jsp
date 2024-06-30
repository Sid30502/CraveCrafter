<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1" %>
<%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
String I_name=request.getParameter("username");
String I_Password=request.getParameter("password");
Class.forName("com.mysql.jdbc.Driver");
Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/mini_project","root","root");
String query="select * from login where email=? and pass=?";
PreparedStatement ps=conn.prepareStatement(query);
ps.setString(1,I_name);
ps.setString(2,I_Password);
ResultSet rs=ps.executeQuery();
if (rs.next())
{
response.sendRedirect("index.html");
}
else
{
response.sendRedirect("Login.html");
}
%>
</body>
</html>