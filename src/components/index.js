import Container from "./container/Container";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LogoutBtn from "./Header/LogoutBtn";
import PostForm from "./post-form/PostForm"
// import Protected from "./AuthLayout";
import AuthLayout from "./AuthLayout";
import Button from "./Button";
import Input from "./Input";
import LoginComponent from "./LoginComponent"
import Logo from "./Logo";
import PostCard from "./PostCard";
import RTE from "./RTE";
import Select from "./Select"
import SignupComponent from "./SignupComponent"

const myStyle = {
    backgroundImage: "url(/HomeImg3.jpg)",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

export {
    Container,
    Footer, 
    Header,
    LogoutBtn, 
    PostForm,
    // Protected,
    AuthLayout,
    Button,
    Input,
    LoginComponent,
    Logo,
    PostCard, 
    RTE,
    Select, 
    SignupComponent,
    myStyle
}