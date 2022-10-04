export default function getCoins(change) {
    let coins = [1,2,5,10,20,50];
      let coinsReturned = new Array(6).fill(0);
      let more = true;
      let i = 5;
      while (more) {
        if (change >= coins[i]){
          change = change - coins[i];
          coinsReturned[i]++;
        }
        else if (i>0){
          i--;
        }
        else{
          more = false;
        }
      }
      return coinsReturned;
 }