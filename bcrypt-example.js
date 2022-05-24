import bcrypt from "bcrypt"

const plainPW = "1234"

const numberOfRounds = 11 // The algorithm will be computed 2^11 times --> 2048

console.log(`Number of rounds --> ${numberOfRounds}`)

console.time("hashing")
const hash = bcrypt.hashSync(plainPW, numberOfRounds) // instead of hashing directly plainPW only, they are doing hash("iojosaio12j321309sdm"+plainPW)
console.timeEnd("hashing")

console.log("HASH: ", hash)

// $2b$10$fEEAa6GgyBGHHqZhR8Eg8OZ.F5OO5ZGMW.FnO97JLKQKXBVektK0a

// "fEEAa6GgyBGHHqZhR8Eg8OZ1234" --> "F5OO5ZGMW.FnO97JLKQKXBVektK0a"
// "fEEAa6GgyBGHHqZhR8Eg8OZ12345" --> "qcsfN97oJFFFLcuMp7Ky9OkBB0"
// "fEEAa6GgyBGHHqZhR8Eg8OZ123456"

// "1234" --> "m12932klmnxc0'9xc'zck"

// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1234"
// ""

const isOK = bcrypt.compareSync(plainPW, hash)
console.log("Do they match? ", isOK)
