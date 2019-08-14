// null, undefined 값 '' 처리
function isEmpty(argument) {
    if (argument == null || argument == undefined) {return ''}
    if (argument == 'object') {
	for(var key in argument){
		if (argument[key] == null || argument[key] == undefined ) {
			argument[key] = ''
		}
		if (typeof argument[key] == 'object') {
			isEmpty(argument[key])
		}
	}
    }
    return argument
}
