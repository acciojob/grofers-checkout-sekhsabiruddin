const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let ans = 0;

const getSum = () => {
  //Add your code here
  //   let price = document.getElementsByClassName("price");
  let price = document.querySelectorAll(".price");

  price.forEach((ele) => {
    ans += parseInt(ele.innerHTML);
  });
  document.getElementById("result").innerHTML = ans;
};

getSumBtn.addEventListener("click", getSum);
