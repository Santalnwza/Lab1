let items: [string, number, boolean][] = [
    ["Laptop", 15, true],
    ["Desk", 50, false],
    ["Glass Vase", 5, true],
    ["Monitor", 10, true],
    ["Chair", 100, false]
]

for (let item of items) {
    if (item[2]) {
        console.log(`${item[0]}: จำนวน ${item[1]} แตกหักง่าย`)
    }
}
