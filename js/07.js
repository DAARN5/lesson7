В HTML є таблиця, є якийсь заголовок, в JS є масив об єктів, 
дані якого требя додати в таблицю


const tableEl = document.querySelector(".js-transaction-table");

const tab = transactionHistory.map((item) => {
  return `
    <tr>
      <td>${item.id}</td>
      <td>${item.amount}</td>
      <td>${item.date}</td>
      <td>${item.business}</td>
      <td>${item.type}</td>
      <td>${item.name}</td>
      <td>${item.account}</td>
    </tr>
  `;
}).join("");

tableEl.insertAdjacentHTML("beforeend", tab);











