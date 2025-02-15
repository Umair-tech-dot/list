import 'bootstrap/dist/css/bootstrap.css'
import Users from './Components/Users';

function App() {

  return (
    <>
      <BrowserRouter>
     <h1>Header</h1>
      <nav>

        <link to="/">Home</link>
      </nav>
      

      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post' element={<Posts />} />
        <Route path='/addpost' element={<Addposts />} />
        <Route path='*' element={<h1>404 not Found</h1>} />
      
      
      </Routes>
      </BrowserRouter>

      <Users />    
      <Home />
      <About />

    </>
  );
}


export default App;