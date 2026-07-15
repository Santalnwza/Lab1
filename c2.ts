let bonus = 5000
let total = 0

for (let year = 1; year <= 20; year++) {
    console.log(`ปีที่ ${year} โบนัส ${bonus} บาท`)
    total += bonus
    bonus += 5000
}

console.log(`รวมโบนัส ${total} บาท`)