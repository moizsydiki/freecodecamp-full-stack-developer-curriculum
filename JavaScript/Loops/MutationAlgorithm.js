function mutation(arr) {
  const lowercaseArr = arr.map((value) => {
    return value.toLowerCase();
  });
  if (lowercaseArr[0].includes(lowercaseArr[1])) {
    return true;
  } else {
    return false;
  }
}

console.log(mutation(["floor", "FLoOr"]));
