function SumSquares(array) {
    let total = 0

    for (let value of array) {
        if (Array.isArray(value)) {
            total += SumSquares(value)
        } else {
            total += value * value
        }
    }

    return total
}



var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [
    [1, 2], 3
];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [
    [
        [
            [
                [
                    [
                        [
                            [
                                [1]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]
console.log(SumSquares(l)); // 1 = 1

l = [10, [
        [10], 10
    ],
    [10]
]
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400