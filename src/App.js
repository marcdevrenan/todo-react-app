import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import ToDoList from "./components/ToDoList";
import About from "./components/About";


function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight:"100vh" }}>
      <div className="w-100" style={{ maxWidth:"400px" }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ToDoList} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
