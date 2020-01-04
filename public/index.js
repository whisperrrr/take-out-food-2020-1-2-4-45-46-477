
let itemsListCard = document.getElementById("items");
let itemsPromotionsCard = document.getElementById("promotions");
let itemsData = loadAllItems();
let itemsPromotionsData = loadPromotions();
showAllItems(itemsData);
showAllPromotions(itemsPromotionsData);
//展示所有菜品信息
function showAllItems(itemsData) {
  let itemsLists = document.createElement("ul");
  let itemsLength = itemsData.length;
  for (let i = 0; i < itemsLength; i++) {
    let newItemsList = document.createElement("li");
    let itemsCount = 0;
    newItemsList.innerHTML = `
      名称：${itemsData[i].name} 
      单价：${itemsData[i].price}
      数量：
      <input type="button" value="+" />
      ${itemsCount}
      <input type="button" value="-" />
    `
    itemsLists.appendChild(newItemsList);  
  }
  itemsListCard.appendChild(itemsLists);
}
//展示所有优惠信息
function showAllPromotions(itemsPromotionsData) {
  let itemsPromotionLists = document.createElement("ul");
  let itemsPromotionsLength = itemsPromotionsData.length;
  for (let i = 0; i < itemsPromotionsLength; i++) {
    let newPromotion = document.createElement("li");
    newPromotion.innerHTML = `
      ${itemsPromotionsData[i].type}
      ${itemsPromotionsData[i].items || ""}
    `
    itemsPromotionLists.appendChild(newPromotion);
  }
  itemsPromotionsCard.appendChild(itemsPromotionLists);
}
function calculatePrice() {
  // 想办法调用`bestCharge`并且把返回的字符串
  // 显示在html页面的`message`中
}

function clearHistory() {
  // 清除用户的选择，以及页面显示的信息
  // 清除之后，用户可以继续正常使用各项功能
}