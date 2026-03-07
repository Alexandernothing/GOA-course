/* 3.
შექმენი ცვლადი სადაც შეინახავ რაიმე სტრინგს

შენი დავალებაა ternary ით შეამოწმო , 

თუ ეს სიტყვა იწყება ასო 'g' თი და სტრინგის სიგრძე მეტია 5 ზე დააკონსოლლოგე --> "starts with g and more than 5 letter"

სხვა შემთხვევაში --> doesnot start with g and less than 5 letter
*/

let str = "Hello"

str[0] === "g" && str.length > 5 ? console.log("starts with g and more than 5 letter") : console.log("does not start with g and less than 5 letter")