const ageToVote = 100

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE

//#region Loops and Dates


let currentDate = new Date()

let currentYear = currentDate.getFullYear()

let jsReleaseYear = 1995

let differenceJS = currentYear - jsReleaseYear
// console.log(`current age of JavaScript is ${differenceJS}`)

function voteverJS() {
  if (differenceJS > ageToVote) {
    console.log("JavaScript is old enough to vote")
  } else {
    console.log("JavaScript is not old enough to vote")
  }
}
// voteverJS()

function numberLog() {

  for (let i = 0; i < 101; i++) {

    let currNum = i
    if (currNum == 100) {
      console.log("Finished...")
    }
    else if (currNum / 2 == 25) {
      console.log("Halfway...")
    }
  }
}
// console.log("Starting...")
// numberLog()
//#endregion

// console.log(`${user.name} lives at ${user.address.street}, ${user.address.city}`)

for (let i = 0; i < cases.length; i++) {
  let casesPosition = i;
  // console.log(cases[casesPosition]["releaseYear"])
  if (cases[casesPosition]["releaseYear"] == 1903){
    console.log(cases[casesPosition])
  }
}