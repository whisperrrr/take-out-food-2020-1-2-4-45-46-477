function bestCharge(selectedItems) {
  let selectedItemsLength = selectedItems.length;
  let itemsData = loadAllItems();
  let chargeWithoutDiscount = 0;
  let halfDiscountItem = []; //算未优惠总价并记录半价商品的序号和优惠价格
  let halfDiscountCharge = 0;
  let resultItemStr = '';   //记录结果字符串
  let itemsDataNew = changeDataFormat(itemsData);   //转换新的数据对象
  for(let i = 0; i < selectedItemsLength; i++) {
    let [item,count] = selectedItems[i].split(" x ");
    let chargeNow = 0;
    if (item === 'ITEM0001' || item === 'ITEM0022') {
      halfDiscountItem.push(item);
      halfDiscountCharge += itemsDataNew[item].price / 2 * count;
    }
    chargeNow += itemsDataNew[item].price * count;
    chargeWithoutDiscount += chargeNow;
    resultItemStr += itemsDataNew[item].name + " x " + count + "=" + chargeNow + "\n";
  }
  let overDiscountCharge = Math.floor(chargeWithoutDiscount / 30) * 6;
  let chargeDiscount = chargeWithoutDiscount - Math.max(halfDiscountCharge,overDiscountCharge)
  //输出字符串
  let resultStr = `
  =============<em>订餐明细</em>=============
  ${resultItemStr}
  -------------------------------------------
  ${useDiscountStr(halfDiscountCharge,overDiscountCharge)}
  总计：${chargeDiscount}元
  ==========================================
  `
  return resultStr;
}
//更改数据存储为object方式
function changeDataFormat(data) {
  let dataLength = data.length;
  let dataNew = {};
  for (let i = 0; i < dataLength; i++) {
    key = data[i].id;
    value = data[i];
    dataNew[key] = value;
  }
  return dataNew;
}
//使用哪一种优惠方式
function useDiscountStr(half,over) {
  let result = "";
  if (half === 0 && over === 0) {
    return ""
  } else if(over >= half) {
    result = `
  使用优惠：
  满30减6元，省${over}元
  ------------------------------------------` 
  } else {
    result = `
  使用优惠：
  指定菜品半价（黄焖鸡，凉皮），省${half}元
  -------------------------------------------`
  }
  return result;
}
