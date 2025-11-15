let count = 0;

function cc(card) {
  if ((card === 2) | (card === 3) | (card === 4) | (card === 6)) {
    return `${--card} Bet`;
  } else if (card === "J" | card === "Q" | card === "K" | card === "A") {
    return `${card} Hold`
  }
  
  else (card === 7) | (card === 8) | (card === 9);
  return `${count} Hold`;
}

console.log(cc(9));
