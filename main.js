function gwrap(generator){
	const iterator = generator()
	function iterate(iteration){
		if(iteration.done) return iteration.value
		const promise = iteration.value
		return promise.then( response => iterate(iterator.next( response )))
	}
	return iterate(iterator.next)
}