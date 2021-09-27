const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null;

    let shortCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderCombination = bestSum(remainder,numbers,memo)
        if(remainderCombination !== null){
            const combination = [...remainderCombination, num]
            if(shortCombination === null || combination.length < shortCombination.length){
                shortCombination = combination;
            }
        }
    }

    memo[targetSum] = shortCombination
    return shortCombination
}



