const tipCalculator = function (invoice) {
    const lowRange = 50;
    const highRange = 300;
    const lowTipRate = 0.15;
    const highTipRate = 0.2;
    return invoice >= lowRange && invoice <= highRange ? invoice * lowTipRate : invoice * highTipRate;
  }
  

  
  const amounts = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const serviceCharges = [];
  const totalAmounts = [];
  
  for (let i = 0; i < amounts.length; i++) {
    const serviceCharge = tipCalculator(amounts[i]);
    serviceCharges.push(serviceCharge);
    totalAmounts.push(amounts[i] + serviceCharge);
  }
  
  console.log(totalAmounts);
  