function firstFunction() {
    console.log('In firstFunction');
    secondFunction();
    console.log('Back in firstFunction');
}
function secondFunction() {
    console.log('In secondFunction');
    thirdFunction();
    console.log('Back in secondFunction');
}
function thirdFunction() {
    console.log('In thirdFunction');
}
console.log('Start');
firstFunction();
console.log('End');
// stack and heap
// two phase execution of JS
//# sourceMappingURL=eventloop.js.map