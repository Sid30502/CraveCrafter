var menu_name=new Array()
var name_menu=new Array()
var price_menu=new Array()
total_price=0
n=0
function add_menu(name,price){
	total_price=total_price+price
	do{
		name_menu[n]=name
		price_menu[n]=price
	}while(n>name_menu.length)
	n=n+1
	document.getElementById('payment_value').value=total_price;
}

function show(){
	document.write(`<!DOCTYPE html>
	<html>
		<head>
			<title>
				Bill
			</title>
			<link rel="stylesheet" href="./CSS/style.css">
			<link rel="stylesheet" href="./CSS/mobile.css">
			<script src="./JS/jquery3.6.4.min.js"></script>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
			<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
			<script src="./JS/showwork.js"></script>
			
			<link rel="stylesheet" href="./CSS/slider.css">    
			<style>
			  body{
				margin: 0;
				padding: 0;
			  }
			  *{
				margin: 0;
			  }
			  .header{
				position: relative;
				background-color: black;
				padding-bottom:15px;
			  } 
			  .nav{
				left: 50%;
				right: 20px;
			  }  
			  
			  .paymentpage{
				margin-left: 10%;
				margin-top: 5%;
			  }
			  .paymentpage table{
				width: 100%;
				height: 100%;
			  } 
			  td{
				font-size: 25px
			  }
			  .cont{
				margin-top: 30%;
				width: 100%;
			  }  
			  .payment-font{
				background-color: Black;
				color: White;
				font-size:25px;
				padding:10px;
				border-radius:10px;
				border: 2px solid Red;
			  }  
			  .payment-font:hover{
				background-color:Red;
				color:pink;
				cursor:pointer;
			  }
			  .paymentvalue{
				font-size:25px;
			  }
		  </style>
		</head>
		<body>
		 
	  <div class="paymentpage" >
	  <table>
		  <tr style="color:red;font-size:50px;">
			  <td>
				  Name
			  </td>
			  <td>
				  Price
			  </td>
		  </tr>`)
		  for(var c=0;c<name_menu.length;c++){

			document.write("<tr><td id='a"+c+"' value='"+name_menu[c]+"'>"+name_menu[c]+"</td><td id='a"+c+"' value='"+price_menu[c]+"'>"+price_menu[c]+"</td></tr>");
		}   
		document.write("<tr><td><h2>Total Payment</h2></td><td>"+total_price+"</td><tr>");
		document.write(`
		</table>
		
		<div style='margin-left:80%;'><a href='Payment.html'><input type='button' class='payment-font' value='Payment' onclick='final_payment(+total_price+)'></a>
		</div>
		</div>
		</body>
		</html>
		`);
		for(var a= 0;a>name_menu.length;a++){
			
		}
}