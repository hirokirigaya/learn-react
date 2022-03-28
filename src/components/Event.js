
function Event() {
  function Change() {
    console.log('im changed the phrase')
  }
  return (
    <div>
      <p>Change the phrase!</p>
      <button onClick={Change}>Click Here</button>
    </div>
  )
}

export default Event;