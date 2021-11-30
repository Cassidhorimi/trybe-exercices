
const catchCoin = async () => {
  const API_URL = 'https://api.coincap.io/v2/assets';

  const coin = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch(error => error.toString());

  return coin;
}

const imprimeCoin = async () => {
  const coin = await catchCoin();
  const coinTable = document.getElementById('coin-table');
  for (let i = 1; i <= 10; i += 1) {
    const newTr = document.createElement('tr');
    newTr.id = `coin-${i}`;
    coinTable.appendChild(newTr);
  }
  coin.forEach((element, index) => {
    const elementTb = document.getElementById(`coin-${index + 1}`);
    const price = Number(element.priceUsd)
    const newTd = document.createElement('td');
    const newTd2 = document.createElement('td');
    newTd.innerText = `${element.name} (${element.symbol})`;
    newTd2.innerText = `$ ${price.toFixed(2)}`;
    elementTb.appendChild(newTd);
    elementTb.appendChild(newTd2);
  });
}
window.onload = () => imprimeCoin();