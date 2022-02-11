// Duplikasi method .find
// Duplikasi method .indexOf

const fruits = ["Jeruk", "Apel", "Mangga", "Leci"]

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)

console.log(fruits.indexOf("Leci"))

const duplikatIndexOf = (arr, dataToFind) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == dataToFind) {
      return i
    }
  }

  return -1
}

// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.

// console.log(fruits.find((val, idx, arr) => {
//   return true
// }))

const duplikatFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i]
    }
  }
}

// console.log(duplikatFind(fruits, (val) => {
//   return val.length > 4
// }))

const ages = [13, 7, 1, 3, 2, 8, 3, 26]

// const copyFruits = [ ...fruits ]
// copyFruits.sort()

// console.log(fruits)
// console.log(copyFruits)

ages.sort((a, b) => {
  return a - b
})

// console.log(ages)

const people = [
  {
    fullName: "seto",
    age : 17
  },
  {
    fullName: "sasuke",
    age : 29
  },
  {
    fullName: "doraemon",
    age : 13
  },
  {
    fullName: "bill",
    age : 40
  },
]

people.sort((a, b) => {
  if (a.fullName > b.fullName) {
    return -1
  }

  if (b.fullName > a.fullName) {
    return 1
  }

  return 0
})

console.log(people)