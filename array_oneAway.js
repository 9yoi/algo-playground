/*
CTCI 1.5
One Away 
*/

/* Removal/ Insert
* Removal: [1,2,3] ==> [1,3]. If numA != numB, numA++
* Insert: [1,2,3] ==> [1,2,4,3]. If num A != numB, numB++;

* Replace: if charAt for one character is diff, numA++ & numB++
*/

function oneEdit (strA, strB) {

  if (strA.length === strB.length) {
    return oneReplace(strA, strB);
  } else if (strA.length - strB.length === 1) {
    return oneRemove(strA, strB);
  } else if (strB.length - strA.length === 1) {
    return oneInsert(strA, strB);
  }

  return false;

}

function oneReplace (strA, strB) {
  var bool = false;
  for (var i = 0; i < strA.length; i++) {
    if (bool && strA[i] !== strB[i]) {
      return false;
    }
    if (strA[i] !== strB[i]) {
      bool = !bool;
    }
  }
  return bool;
}

function oneRemove (strA, strB) {
  var bool = false;
  for (var i = 0; i < strA.length; i++) {
    if (bool) {
      if (strA[i] !== strB [i - 1]) {
        return false;
      }
    }
    if (strA[i] !== strB [i]) {
      bool = !bool;
    }
  }
  return bool;
}

function oneInsert (strA, strB) {
  var bool = false;
  for (var i = 0; i < strA.length; i++) {
    if (bool) {
      if (strA[i] !== strB [i+1]) {
        return false;
      }
    }
    if (strA[i] !== strB [i]) {
      bool = !bool;
    }
  }
  return bool;
}

console.log(oneEdit('1234', '1234'));