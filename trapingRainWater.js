const trap = function MaxWaterContainer(heights) {
  totalwater = 0
  for(let p = 0; p < heights.length; p++) {
    let leftP = p, rightP = p, maxleft = 0, maxRight = 0
    
    while(leftP >= 0) {
      maxleft = Math.max(maxleft, heights[leftP])
      leftP--
    }
    
    while(rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP])
      rightP++
    }
    
    const waterContainer = Math.min(maxRight, maxleft) - heights[p]
    
    if(waterContainer >= 0) {
      totalwater += waterContainer
    }
  }
  return totalwater
}


//Optimal Solution
const trap = function MaxWaterContainer(heights) {
  
  let leftP = 0, rightP = heights.length-1, leftMax = 0, rightMax = 0, totalWater = 0
  
  while(leftP < rightP) {
    if(heights[leftP] <= heights[rightP]){
      if(heights[leftP] >= leftMax){
        leftMax = heights[leftP]
      } else {
        totalWater += leftMax - heights[leftP]
      }
      leftP++
    } else {
      if(heights[rightP] >= rightMax) {
        rightMax = heights[rightP]
      } else {
        totalWater += rightMax - heights[rightP]
      }
      rightP--
    }
  }
  return totalWater
}



const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
console.log(trap(heights))
