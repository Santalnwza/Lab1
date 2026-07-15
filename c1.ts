let cupSize: string = "L"
let ownCup: boolean = true
let price: number

if (cupSize == "S") price = 60
else if (cupSize == "M") price = 80
else price = 100

let total = ownCup ? price * 0.95 : price

console.log(`ขนาด ${cupSize}`)
console.log(`ราคาปกติ ${price} บาท`)
console.log(`ราคาสุทธิ ${total} บาท`)

