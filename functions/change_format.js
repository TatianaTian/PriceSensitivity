const query_data = require('./query_data')

const change_format = async (product_to_map) => {
    //product_to_map = await query_data('GBP',['GB'])
    
    //console.log("product_to_map", product_to_map)

    const list_1 = []
    for (let [k, v] of product_to_map) {
        const list_2 = []
        //console.log("k is ", k);
        list_2.push(k)
        list_2.push(v)
        list_1.push(list_2)
    }
    
    const list_3 = []
    for (i=0; i<list_1.length; i++){
        const map = list_1[i][1]
        const list_4 = []
        for (let [k, v] of map) {
            const list_5 = []
            //console.log("k is ", k);
            list_5.push(k)
            list_5.push(v)
            list_4.push(list_5)
            //console.log("list 5 is ", list_5)
        }
        //console.log("list 4 is ", list_4)
        //console.log("[list_1[i][0] is ", list_1[i][0])
        
        list_6 = [list_1[i][0], list_4]
        //console.log("list 6 is ", list_6)

        list_3.push(list_6)
        //console.log("list 3 is ", list_3)
    }
    
    
      
    //console.log("list 1 is ", list_1)
    //console.log("list 3 is ", list_3)
    return list_3

}



change_format()

module.exports = change_format; 