// function something() {
//     let count = 0;
//     function inner() {
//         count = count + 1;
//         document.getElementById("count").innerText = `clicked:${"count"}`
//     }
//     return inner();
// }
// let countingNumber = something();
// console.log(countingNumber);

// let count = 0;
// function countingNumber() {
//     count = count + 1;
//     document.getElementById("count").innerText = `clicked:${count}`;
//     alert("my name is siva")
// }

function someX() {
    let count = 0;
    function inner() {
        count = count + 1;
        document.getElementById("count").innerText = `clicked:${count}`;
        alert("my name is siva")
    }
    return inner;
}

let countingNumber = someX();
// console.log(countingNumber);