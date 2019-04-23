
function validation(){
	var name=document.getElementById("name").value;
	var password=document.getElementById("pass").value;
	var email=document.getElementById("email_id").value;



	//password validation
	function special_chr(arguemnt,element) {
		for(var i of element){
			if(arguemnt.includes(i)){
				return true
			}
		}return false
	}

	if (!special_chr(password,"@#$%&")){
		document.getElementById("perror").innerHTML="Password must contain any  special character like @ # $ % &"
		return false;
	}
	if(password.includes(" ")){
		document.getElementById("perror").innerHTML=" password does not include any spaces "
		return false;

	}if(password.toLowerCase()==password){
		document.getElementById("perror").innerHTML="password must contain at least one Capital Character"
		return false
	}
	var num_list=[1,2,3,4,5,6,7,8,9,0]
	for(var i of num_list){
		for(var b of password){
			if(i==b){
				return true
			}
		}document.getElementById("perror").innerHTML="password must contain atleat one Number Value"
		return false
	}
return true
}
















//function for showing password

function myFunction(){
	var x=document.getElementById("pass")
	if(x.type==="password"){
		x.type="text";
	}else{
		x.type="password"
	}
}



