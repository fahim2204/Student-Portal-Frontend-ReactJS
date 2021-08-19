import Header from './Header';
import Footer from './Footer';
import Container from '@material-ui/core/Container'


const Home = ()=>{
    return(
    <>
        <Header/>
        <Container maxWidth="xl">
        
            { sessionStorage.getItem('uname')}
            { sessionStorage.getItem('type')}
            { sessionStorage.getItem('token')}
            { sessionStorage.getItem('id')}
            
          
        </Container>
       
     
        <Footer/>
    </>
    );
};
export default Home;