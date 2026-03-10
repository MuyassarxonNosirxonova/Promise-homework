let mypromise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Hello')
	},4000)
})
let greet = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Good morning')
	},2000)
})
let bye = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Bye')
	},3000)
})
Promise.race([mypromise,greet,bye])
.then((result)=>{
	console.log(result);
	
})