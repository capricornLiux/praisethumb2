import rp from 'request-promise';
class indexModel {
	constructor(ctx){
		this.ctx = ctx;
	}
	updateNum(){
		const option = {
			uri: 'http://localhost/praisethumb2/praise.php',
			method: 'GET'
		}

		return new Promise((resolve, reject)=>{
			rp(option).then((data)=>{
				// 将json字符串转换为对象
				const info = JSON.parse(data);
				resolve({data: info});
			}).catch(err=>{
				reject(err);
			})
		})
	}
}

export default indexModel;