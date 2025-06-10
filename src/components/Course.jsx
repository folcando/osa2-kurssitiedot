const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = ({parts}) => {  
  return (
    <ul>
      {parts.map(part => <Part key={part.id} part={part}/>)}
    </ul>
  )
}
        const Part = ({part}) => {
        return (
            <li>{part.name} {part.exercises}</li>
        )
        }


const Total = ({parts}) => {
  const exercisesArray = parts.map(part => part.exercises)
  const total = exercisesArray.reduce(
    (accumulator, i) => accumulator + i,
    0
  )
  return (
    <b>Total number of exercises: {total}</b>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course