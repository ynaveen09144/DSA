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

const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
console.log(trap(heights))
