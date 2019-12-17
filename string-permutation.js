permute = (str, p, r) => {
  if(p === r){
    console.log(str);
  }else{
    for(let i= p; i <= r; i++){
      let new_str = swap(str, p, i);
      permute(new_str, p+1, r);
    }
  }
}

swap = (str, index1, index2) => {
//we convert string to array for swapping
  let stringArr = str.split('');
  let temp = stringArr[index1];
  stringArr[index1] = stringArr[index2];
  stringArr[index2] = temp;
  return stringArr.join('');
}

const originalstr = 'abc';
permute(originalstr, 0, originalstr.length-1);
