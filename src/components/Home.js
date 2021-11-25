import '../App.css';
import { Navbar,Container,Button,Form } from 'react-bootstrap';
import React, { useState } from 'react';
function Home(){
const [url, setUrl] = useState("http://google.com");
const [genurl, setGenurl] = useState("");
const getUrl=(url)=>{
    setGenurl(url);
}
    return (
        <div>
            
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#">Tiny Urls</Navbar.Brand>
                    
                </Container>
            </Navbar>
            <div className="containers">
            <Form>
  

  <Form.Group className="mb-3 field1" controlId="formBasicurl">
    <Form.Label>Enter your URL</Form.Label>
    <Form.Control type="text" value={url} placeholder="url" onChange={(e)=>{
        setUrl(e.target.value);
    }} />
  </Form.Group>
  <Button variant="primary" type="button" onClick={()=>{
      getUrl(url);
  }}>
    Submit
  </Button>
  <Form.Group className="mb-3 field2" controlId="genurl">
    <Form.Label>Generated URL</Form.Label>
    <Form.Control type="text" value={genurl} placeholder="generated url" />
    
  </Form.Group>
  
</Form>
            </div>
        </div>
    )
}
export default Home;