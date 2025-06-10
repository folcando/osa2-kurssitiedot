const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = ({part}) => {
  return (
    <li>{part.name} {part.exercises}</li>
  )
}

const Content = ({parts}) => {  
  return (
    <ul>
      {parts.map(part => <Part key={part.id} part={part}/>)}
    </ul>
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

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }, 
      {
        name: 'Fullstack advanced',
        exercises: 20,
        id: 4
      }
    ]
  }

  return (
    <Course course={course}/>
  )
}

export default App