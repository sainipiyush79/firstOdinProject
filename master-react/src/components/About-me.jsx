

function List(props){
  return (
    <>
    <ul>
      {props.animals.map((animal) => {
        return <li key = {animal}>animal</li>
      })}
    </ul>
    </>
  );

}

function AboutMe() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <h1>Animals</h1>
      <List animals = {animals}/>
      
    </>
  );
}

export default AboutMe;
