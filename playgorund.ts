export default function play() {
  console.log("Hello world");

  function logPerson(personName: string, personAge: number): string {
    const info = `Name: ${personName} and Age: ${personAge}`;

    console.log(info);
    return info;
  }
  logPerson("Anuj", 23);
}
