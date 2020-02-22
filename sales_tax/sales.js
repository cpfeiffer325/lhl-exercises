const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
]

const calculateSalesTax = (salesData, taxRates) => {
  totalResults = {}

  salesData.map(saleData => {
    const salesTotal = saleData.sales.reduce((acc, cur) => acc + cur)
    const name = saleData.name
    const tax = taxRates[saleData.province]
    if (!totalResults[name]) {
      totalResults[name] = {
        totalSales: salesTotal,
        totalTaxes: salesTotal * tax
      }
    } else {
      const updateTotal = totalResults[name].totalSales + salesTotal
      const updateTax = totalResults[name].totalTaxes + (salesTotal * tax)
      totalResults[name] = {
        totalSales: updateTotal,
        totalTaxes: updateTax
      }
    }
  })
  return totalResults
}

const results = calculateSalesTax(companySalesData, salesTaxRates)
console.log(results)
