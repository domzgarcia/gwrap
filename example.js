const fetch = require('node-fetch')

gwrap(function *(){
	const uri = 'http://jsonplaceholder/typicode.com/post/1'
	const response = yield fetch(uri)
	const post = yield response.json()
	const title = post.title
	return title
})
.catch(err => console.log(error.stack))
.then(res => console.log('run resulted in', res))