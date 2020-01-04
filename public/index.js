
let itemsListCard = document.getElementById("items");
let itemsPromotionsCard = document.getElementById("promotions");
let itemsShowCard = document.getElementById("message");
let itemsData = loadAllItems();
let itemsPromotionsData = loadPromotions();
showAllItems(itemsData);
showAllPromotions(itemsPromotionsData);
//给itemsListCard添加点击事件监听函数,改变点餐数量
itemsListCard.addEventListener("click",changeItemCount);
//改变点餐数量
function changeItemCount(event) {
  let clickedBtn = event.target;
  let clickedBtnNext = clickedBtn.nextElementSibling;
  let clickedBtnPre = clickedBtn.previousElementSibling;
  if (clickedBtn.value === "+") {
    clickedBtnNext.innerHTML = parseInt(clickedBtnNext.innerHTML) + 1;
  } else if (clickedBtn.value === "-") {
    clickedBtnPre.innerHTML = parseInt(clickedBtnPre.innerHTML) - 1;
  }
}
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
      <span>${itemsCount}</span>
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
//展示最后的账单明细
function calculatePrice() {
  let selectedItems = getChoosedItem();
  let showBill = bestCharge(selectedItems);
  itemsShowCard.innerHTML = showBill;
}
function clearHistory() {
  window.location.reload();
}
//把用户选好后的条目转化成["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]
function getChoosedItem() {
  let result = [];
  let itemsLi = document.getElementsByTagName("span");
  let itemsLiLength = itemsLi.length;
  for (let i = 0; i < itemsLiLength; i++) {
    let itemsLiCount = itemsLi[i].innerHTML;
    if (itemsLiCount !== "0") {
      let ChoosedItemStr = itemsData[i].id + " x " + itemsLiCount;
      result.push(ChoosedItemStr);
    }
  }
  return result;
}