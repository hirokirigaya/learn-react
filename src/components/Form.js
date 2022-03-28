function Form() {
  function Register(e) {
    e.preventDefault()
    console.log('Register has send')
  }
  return (
    <div>
      <h1>My Register</h1>
      <form onSubmit={Register}>
        <div>
          <input type="text" placeholder="Your name"/>
        </div>
        <div>
          <input type="submit" value="register"/>
        </div>
      </form>
    </div>
  );
};

export default Form;