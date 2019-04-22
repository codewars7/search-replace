const myReplace = (str, before, after) => {
  const reg = /[A-Z]/
  if(reg.test(before)) {
    const firstAfterLetter = after.charAt(0).toUpperCase()
    const modifiedAfter = firstAfterLetter + after.slice(1)
    return str.replace(before, modifiedAfter)
  }
  return str.replace(before,after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"))
