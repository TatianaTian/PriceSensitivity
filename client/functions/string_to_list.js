const string_to_list = (string, type) =>{
    //try{
        /*
    if (string.includes(",")){
        const res = string.split(",");
        var convert_list = []
        for (i=0; i<res.length; i++){
            if (type === 'float'){
                const num = parseFloat(res[i])
                convert_list.push(num)
            } else{
                const str = res[i].toString()
                convert_list.push(str)
            }
        }
        console.log(convert_list)
        return convert_list
    } else {
        if (type === 'float'){
            return [parseFloat(string)]
        } else {
            return [string.toString()]
        }
        
    }*/
    
/*
    } catch(error){
        console.log("string is ", string)
    }
    */
    //
    
    try{
    const res = string.split(",");
    var convert_list = []
    for (i=0; i<res.length; i++){
        if (type === 'float'){
            const num = parseFloat(res[i])
            convert_list.push(num)
        } else{
            const str = res[i].toString()
            convert_list.push(str)
        }
    }
    //console.log(convert_list)
    return convert_list
}catch(error){
    //console.log("string is ", string)
}

}

string_to_list('209.28','float')
module.exports = string_to_list; 