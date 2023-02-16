//your code here
 function RopeCost(event){
	 event.preventDefault();
	 var input=document.querySelector('input').value;
	 var arr=input.split(",");
	 var cost=0;
	 arr.sort(function (a,b) {return a-b});

	 while(arr.length>1){
		 var res=Number(arr[0])+Number(arr[1]);
		 arr.push(res);
		 cost+=res;
		 arr.shift();
		 arr.shift();
		 arr.sort(function (a,b) {return a-b});
	 }
	 document.getElementById('result').textContent=cost;
 }