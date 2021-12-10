function solution(K, A) {
  let result = A.length
  // are all slices valid?
  const L = (Math.max(...A))
  const S = (Math.min(...A))
  if (Math.abs(L - S) <= K){
    return calculateTotalPossibleSlices(A)
  }

  for (let i = 0; i < A.length; i++){
    for (let j = i+1; j < A.length; j++){
      if (Math.abs(A[i] - A[j]) <= K) {
        result++
      }
    }
    
 }
  return result
}

function calculateTotalPossibleSlices(A){
  return (A.length * (A.length + 1) / 2) - 1
}

// inefficient!
function generateAllPossibleSlices(A){
  
}


module.exports = { solution, calculateTotalPossibleSlices }