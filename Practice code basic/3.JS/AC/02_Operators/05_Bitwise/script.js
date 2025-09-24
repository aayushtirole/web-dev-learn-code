// ---------------- BITWISE ASSIGNMENT ----------------

let y = 5;   // (binary: 0101)

y &= 3;      // &= bitwise AND assignment (y = y & 3)
console.log(y);  // 1 (0101 & 0011 = 0001)

y |= 2;      // |= bitwise OR assignment (y = y | 2)
console.log(y);  // 3 (0001 | 0010 = 0011)

y ^= 1;      // ^= bitwise XOR assignment (y = y ^ 1)
console.log(y);  // 2 (0011 ^ 0001 = 0010)

y <<= 2;     // <<= left shift assignment (y = y << 2)
console.log(y);  // 8 (0010 << 2 = 1000)

y >>= 1;     // >>= right shift assignment (y = y >> 1)
console.log(y);  // 4 (1000 >> 1 = 0100)

y >>>= 1;    // >>>= unsigned right shift assignment
console.log(y);  // 2 (0100 >>> 1 = 0010)
