1. 3 is printed at line 12, as there are no errors and the for loop runs 3 times, which means that i is incremented from 0 3 times up to 3. i is still accessible as it is a var type variable.
2. 150 is printed, as in line 7 the last time that discountedPrice was updated was for a base price of 300 (last element of price array) which a discount of 50%, so 300 * 0.5 = 150, which is then stored outside of the scope as it is a var type.
3. 150 is printed, as the most recent iteration of the for loop was when final price was updated, which was for price[2] = 300, which is then discounted to 150.
4. [50, 100, 150], as line 9 will push the discounted final prices to the discount array, which are the values stored in the array.
5. an error is thrown, as i only exists in the scope of the for loop.
6. an error is thrown, as discountedPrice only exists in the scope of the for loop.
7. 150 is printed, as finalPrice has the scope of the entire function, which includes line 14.
8. [50, 100, 150] is returned, as the code simply multiplies each value in the original input array by 0.5, then pushes the value to an array that is returned.
9. Error is thrown as i does not exist in this scope.
10. 3 is returned
11. [50, 100, 150] is returned as the code runs perfectly fine.
12. 
console.log(student.name);
console.log(student["Grad year"]);
console.log(student.greeting());
console.log(student["Favorite Teacher"]["name"]);
console.log(student["courseLoad"][0]);
13.  
    a. '3'+2='32' as the 2 is converted to a string, which is then appended
    b. '3'-2=1 as the '3' is converted to an integer, which is then used in the equation 3-2=1
    c. 3+null=3 as null is treated as 0 in this equation
    d. '3'+null = '3null' as null is converted to a string then appended
    e. true+3=4 as true is treated as a 1 in this equation.
    f. false+null=0 as false is equal to 0 and null is converted to 0 as well.
    g. '3'+undefined = '3undefined' as it treats undefined as a string to be appeneded
    h. '3'-undefined =Nan as the subtraction operator automatically converts the '3' to a 3, and undefined is equal to NaN (not a number, so infinity which is equal to undefined).
14. 
    a. '2'>1 = true as it converts '2' to 2
    b. '2'<'12' = false as 12 is alphabetically before 2, meaning it has a lower value when comparing strings
    c. 2 == '2' = true, as it converts 2 to '2' or the other way around.
    d. 2 === '2' = false as this operator does not do type conversion.
    e. true == 2 = false as true is converted to be 1, so 1 != 2.
    f. true === Boolean(2) = true as Boolean(2) returns true
15. == will perform type conversion, === will not convert.
16.  
for(const property in statistics){
    if((statistics[property] % 2 == 1) || (property[0] == 'r')){
        console.log(statistics[property]);
    }
}
17. the output is [2,4,6], this works by iterating through the original array, and for each iteration you call callback (or dosomething) in this case which multiplies each element by 2, then pushes it to the new array which is eventually returned.
18. 
let d = new Date();


function callback(){
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(callback, 1000);

19. 
4/30/2023
4/30/2023
4/30/2023
4/30/2023
... (continues)