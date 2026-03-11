function loadUserData(userId) {
  return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(userId % 2 === 0){
				resolve('Muvaffaqiyatli yuklandi')
			}else{
				reject('Xatolik yuz berdi')
			}
		},1000)
	})
}
loadUserData(2)
.then(data=>console.log('User',data))
.catch(error=>console.log('error',error))

loadUserData(3)
.then(data=>console.log('User',data))
.catch(error=>console.log('Error',error))
