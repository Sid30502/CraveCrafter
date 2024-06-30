<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Signin</title>
</head>
<body>
<%
String I_name=request.getParameter("username");
String I_email=request.getParameter("email");
String I_Password=request.getParameter("password");
try
{
         Class.forName("com.mysql.jdbc.Driver");
           Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mini_project", "root", "root");
           Statement st=conn.createStatement();
           int i=st.executeUpdate("insert into login(uname,email,pass) values('"+I_name+"','"+I_email+"','"+I_Password+"')");
        out.println("Data is successfully inserted!<br> <a href='Login.html'> <input type='button' value='login page'></a>");
        }
        catch(Exception e)
        {
        System.out.print(e);
        e.printStackTrace();
        }
%>
</body>
</html>