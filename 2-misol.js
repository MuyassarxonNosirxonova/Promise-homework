let promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject('Xato yuz berdi')
	},1000)
})
promise
  .then(data =>(data))
	.catch((error)=>{
		console.log( error);
	})
