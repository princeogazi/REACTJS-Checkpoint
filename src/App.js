import { Button, Card, CardImg, Form, Image, Navbar } from 'react-bootstrap';
import './App.css';
import WD from './WD.jpg';
import CB from './CB.jpg';
import UI from './UI.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <div class="container">
            <div class="site-title">
                <h1>REACT JS Checkpoint</h1>
            </div>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Categories</a></li>
                    <li><a>More</a></li>
                </ul>
                <Form className='navform' role='Search'>
                  <input className='typein' type='search' placeholder='Search' aria-label='Search'></input>
                  <Button className='btn' type='submit'>Search</Button>
                </Form>
            </nav>
        </div>
      </header>
        <div className='photocard'>
          <Card className='topic1' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={WD} alt='WD' height={'200px'} width={'350px'}/>
            <Card.Body>
            <Card.Title><h2>Web Development</h2></Card.Title>
            <Card.Text>
            Learn how to code and design web applications within 6 months.
            </Card.Text>
            <Button className='styling' variant="primary"><h3>Get Access</h3></Button>
            </Card.Body>
          </Card>

          <Card className='topic2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={CB} alt='CB' height={'200px'} width={'350px'}/>
            <Card.Body>
            <Card.Title><h2>Computer Basics</h2></Card.Title>
            <Card.Text>
            Learn how to operate a computer within 6 months.
            </Card.Text>
            <Button className='styling' variant="primary"><h3>Get Access</h3></Button>
            </Card.Body>
          </Card>

          <Card className='topic3' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={UI} alt='UI' height={'200px'} width={'350px'}/>
            <Card.Body>
            <Card.Title><h2>UI/UX Design</h2></Card.Title>
            <Card.Text>
            Become a certified UI/UX Designer within 6 months.
            </Card.Text>
            <Button className='styling' variant="primary"><h3>Get Access</h3></Button>
            </Card.Body>
          </Card>
        </div>
    </div>
  );
}

export default App;
