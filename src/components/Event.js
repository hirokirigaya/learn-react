import Button from "./partials/Button";

function Event() {
  function Change() {
    console.log('First event')
  }
  function ChangeTwo() {
    console.log('Second event')
  }
  return (
    <div>
      <p>Change the phrase!</p>
      <Button event={Change} text="My first event"/>
      <Button event={ChangeTwo} text="My second event"/>
    </div>
  )
}

export default Event;