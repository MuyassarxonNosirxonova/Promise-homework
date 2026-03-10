let promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Salom dunyo");
	},2000);
});
promise
  .then(data => console.log(data))
