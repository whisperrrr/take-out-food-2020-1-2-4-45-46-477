// 请把与index.html页面相关的javascript代码写在这里
// 同时删除该注释
let itemsListCard = document.getElementById("items");
let itemsLists = document.createElement("ul");
let itemsInfo = loadAllItems();
itemsListCard.appendChild(itemsLists);
showAllItems(itemsInfo);

//展示所有菜品信息
function showAllItems(itemsInfo) {
  let itemsLength = itemsInfo.length;
  for (let i = 0; i < itemsLength; i++) {
    let newItemsList = document.createElement("li");
    let itemsCount = 0;
    newItemsList.innerHTML = `
      名称：${itemsInfo[i].name} 
      单价：${itemsInfo[i].price}
      <input type="button" value="+" />
      ${itemsCount}
      <input type="button" value="-" />
    `
    itemsLists.appendChild(newItemsList);  
  }
}

function calculatePrice() {
  // 想办法调用`bestCharge`并且把返回的字符串
  // 显示在html页面的`message`中
}

function clearHistory() {
  // 清除用户的选择，以及页面显示的信息
  // 清除之后，用户可以继续正常使用各项功能
}