const PERSON = {
  firstName: "Juan",
  lastName: "Perez",
  city: "Lima",
  age: 20,
  country: "Peru",
  school: "New Institute Innova",
  family: {
    father: "Anthony",
    mother: "Alice",
    sister: "Ivone",
  },
};

//1. Destructuring the object to display only the firstName and lastname
function onClickTextEjercise1() {
  const { firstName, lastName } = PERSON;
  document.querySelector(
    "#content-exercise-1"
  ).innerHTML = `The person is ${firstName} ${lastName}.`;
}

//2. Using Destructuring Aliases, display only city and country (aliases: ciudad, pais).
function onClickTextEjercise2() {
  const { city: ciudad, country: pais } = PERSON;
  document.querySelector(
    "#content-exercise-2"
  ).innerHTML = `The location is ${ciudad}, ${pais}.`;
}

//3. Using Destructuring Aliases, display only city and country (aliases: ciudad, pais).
function onClickTextEjercise3() {
  const {
    family: { father, mother },
  } = PERSON;
  document.querySelector(
    "#content-exercise-3"
  ).innerHTML = `His Father is ${father} and his mother is ${mother}.`;
}
