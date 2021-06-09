var sum="";
$("button").click(function() {
   	var fired_button = $(this).val();
   	if(fired_button!="clear"){
   			function getRandomColor() {
			  var letters = '0123456789ABCDEF';
			  var color = '#';
			  for (var i = 0; i < 6; i++) {
			    color += letters[Math.floor(Math.random() * 16)];
			  }
			  return color;
			}
   	   		$("textarea").css("background-color",getRandomColor());
   	}
   	else
   		$("textarea").css("background-color","black");
   	sum+=fired_button;
   	if(fired_button=="clear"){
   	   		sum="";
   	   		$("textarea").text("0");
   	}
   	else{
   	 if(fired_button=="="){
   		var flag=0;
   		var x="",y="",oper="";
   		for(var i=0;i<sum.length-1;i++){
   			if((sum[i]<'0' || sum[i]>'9') && sum[i]!='.' ){
   				if(oper!=""){
   					if(oper=='-')
			   			x=(Number(x)-Number(y)).toString();
			   		else if(oper=='*')
			   			x=(Number(x)*Number(y)).toString();
			   		else if(oper=='/')
			   			x=(Number(x)/Number(y)).toString();
			   		else
			   			x=(Number(x)+Number(y)).toString();
			   		y="";
   				}
   				oper=sum[i];
   				flag=1;
   				continue;
   			}
   			if(flag==0)
   				x+=sum[i];
   			else
   				y+=sum[i];
   		}
   		if(oper=='-')
   			sum=(Number(x)-Number(y)).toString();
   		else if(oper=='*')
   			sum=(Number(x)*Number(y)).toString();
   		else if(oper=='/')
   			sum=(Number(x)/Number(y)).toString();
   		else
   			sum=(Number(x)+Number(y)).toString();
   	}
   	$("textarea").text(sum);
   }
});