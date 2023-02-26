const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let ans = 0;
const getSum = () => {
  //Add your code here
  //   let price = document.getElementsByClassName("price");
  let price = document.querySelectorAll(".price");
  console.log(price);
  price.forEach((ele) => {
    ans += parseInt(ele.innerHTML);
  });
  let tbody = document.getElementsByTagName("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let td1 = document.createElement("td");
  td.innerHTML = "Total";
  td.id = "total";
  td1.id = "result";
  tr.append(td);
  tr.append(td1);
  tbody[0].append(tr);
  document.getElementById("result").innerHTML = ans;
};

getSumBtn.addEventListener("click", getSum);

// let tr = `<tr>
// <td id="total">Total</td>
//  <td id="result"></td>
// </tr>`;
// tbody.innerHTML = tr;
