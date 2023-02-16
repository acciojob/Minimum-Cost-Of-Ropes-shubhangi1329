//your code here
 function RopeCost(event){
	 event.preventDefault();
	 var input=document.querySelector('input');
	 var arr=input.split(",");
	 var cost=0;

	 while(arr.length>1){
		 var res=Number(arr[0])+Number(arr[1]);
		 arr.push(res);
		 cost+=res;
		 arr.shift();
		 arr.shift();
		 arr.sort(a,b)=>{return a-b};
	 }
	 document.getElementById('result').textContent=cost;
 }