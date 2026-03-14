// contacct

function Contact(props) {
  return(
    <div>
      <h3>Name: {props.name}</h3>
      <p>Phone: {props.phone}</p>
      <hr />
    </div>//props is a result
  );
}

function App(){
  return(
    <div>
      <h1>My Contact</h1>
      <Contact name = "Ermias" phone = "0913243456"/>
      <Contact name = "Keno" phone = "0913243457"/>
      <Contact name = "Delu" phone = "0913243458"/>
    </div>
  )
}

// state in change from component to component with update is called react state.
export default App;