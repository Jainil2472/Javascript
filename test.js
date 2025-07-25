const nums = [5,9,3,7,644,99,335,2,11,33,35,33];
let target = 16;
let nums2 = nums.sort(function(a,b){return a-b});
console.log(nums2);
let mid=0;
let i2,j2;
for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] > target) {
        mid = i;        
        break;
    }
}
for (let i = 0; i < mid; i++) {
    for (let j = i; j < mid; j++) {
        if ((nums2[i]+nums2[j]) == target) {
            i2=nums2[i];
            
            j2=nums2[j];
            
            console.log(j2,i2);
            console.log(nums.indexOf(5));
            
            // console.log(nums.indexOf(i2),nums.indexOf(j2));
            return;
        }
        
    }
    
}
