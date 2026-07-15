let weight: number[] = [15, 55, 4.2, 8.9, 23, 16, 12.5, 27, 27.5, 30]

let count = 0
let sum = 0

for (let w of weight) {
    console.log(w)
    if (w >= 20) count++
    sum += w
}

console.log(`พัสดุเกินเกณฑ์ ${count} ชิ้น`)
console.log(`น้ำหนักเฉลี่ย ${sum / weight.length} กิโลกรัม`)
