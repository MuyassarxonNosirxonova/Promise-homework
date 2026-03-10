let promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Spring')
	},1000)
})
let mypromise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Summer')
	},2000)
})
let mycode = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('Winter')
	},3000)
})
Promise.all([promise,mypromise,mycode])
.then((result)=>{
	console.log(result);
	
})