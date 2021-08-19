import Header from './Header';
import Footer from './Footer';


const Home = ()=>{
    // console.log(Cookies.get('id'));
    // console.log(Cookies.get('token'));
    // console.log(Cookies.get('uname'));
    return(
    <>
        <Header/>
        <div className="container">
        Home body
       
   
     { sessionStorage.getItem('uname')}
     { sessionStorage.getItem('type')}
     { sessionStorage.getItem('token')}
     { sessionStorage.getItem('id')}
    
     
        </div>
        <Footer/>
    </>
    );
};
export default Home;