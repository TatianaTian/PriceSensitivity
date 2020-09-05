



const price_elasticity = (sales, product_price, slope)=>{
    const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    const avgPrice = arrAvg(product_price)
    const avgSales = arrAvg(sales)
    console.log("avgSales is ", avgSales)
    console.log("avgPrice is ", avgPrice)
    const perc_price_change = 1/avgPrice
    const perc_revenue_change = slope/avgSales
    const elasticity = perc_revenue_change/perc_price_change
    console.log("elasticity is ", elasticity)
    return elasticity
}

module.exports = price_elasticity; 
price_elasticity([1,2],[2,3],5)