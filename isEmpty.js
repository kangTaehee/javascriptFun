// null, undefined 값 '' 처리
function isEmpty(argument) {
    $.each(argument, function(key, value){
        if( value == null || value == undefined ){
            argument[key] = ''
        }
        if (typeof argument[key] == 'object') {
            isEmpty(argument[key])
        }
    });
    return argument
}
