import '../App.css';
import { Navbar,Container,Button,Form ,Alert} from 'react-bootstrap';
import React, { useState } from 'react';
function Home(){
const [url, setUrl] = useState("http://google.com");
const [genurl, setGenurl] = useState("");
const [isAlert,setIsAlert]=useState(false);
const getUrl=(url)=>{
    
    fetch("https://tnny.herokuapp.com/getUrl",{
      method: "POST",
      body: JSON.stringify({
         url
      }),
      headers: {
         "Content-Type": "application/json",
      }
    }).then(
      (r) => {
         console.log(r);
         if (r.ok) {
          setGenurl("");
          alert("success!!!!")
          return r.json();
         } else {
          alert("Error");
         }
      }
   ).then((r)=>{
    console.log(r.url);
    setGenurl(r.url);
   });
}
const copyToClipboard=function(){
  navigator.clipboard.writeText(genurl);
  setIsAlert(true);
  setTimeout(()=>{
    setIsAlert(false);
  },1000)
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
    <div className="clear">
    <Form.Control type="text" value={url} placeholder="url" onChange={(e)=>{
        setUrl(e.target.value);
    }} />
    <Button variant="outline-danger" onClick={()=>{
      setUrl("");
      setGenurl("");
    }}>x</Button>
    </div>
  </Form.Group>
  <Button variant="primary" type="button" onClick={()=>{
      getUrl(url);
  }}>
    Submit
  </Button>
  <Form.Group className="mb-3 field2" controlId="genurl">
    <Form.Label>Generated sort URL {" "}</Form.Label>
    {(genurl!=="" && genurl!==null && genurl!==undefined)?<Button type="button" variant="outline-primary" href={genurl} target="_blank"  >{genurl}</Button>:null}
    
  </Form.Group>
  
</Form>
{!isAlert?<Button  variant="outline-warning" type="button" onClick={()=>{
      copyToClipboard();
  }}>
    copy to clipboard
  </Button>:null}
  {isAlert?<Alert key={123} variant="info">
    Link successfully copied to clipboard!!!
  </Alert>:null}
            </div>
        </div>
    )
}
export default Home;