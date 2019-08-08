import React, {useContext,useState,useEffect } from 'react';
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';

const Register = (props) =>{
const alertContext = useContext(AlertContext);
const authContext = useContext(AuthContext);

const {setAlert}=alertContext;
const {register,error,clearErrors,isAuthenticated}=authContext;

useEffect(()=>{
	if(isAuthenticated){
		props.history.push('/')
	}
	if(error==='User Email Already Exists'){
		setAlert(error,'#ef5350 red lighten-1');
		clearErrors();
	}
	//eslint-disable-next-line
},[error,isAuthenticated,props.history])

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:'',
	});
	
    const {name, email, password, password2 } = user;

	const onChange = (e) => setUser({...user,[e.target.name]:e.target.value});

	const onSubmit = (e) => {
		e.preventDefault();

		if(name==='' || email ===''||password===''){
			setAlert("Please enter all fields","#ef5350 red lighten-1")
		}else if(password !==password2){
			setAlert("Passwords do not match","#ef5350 red lighten-1")
		}else if(password < 5 ){
			setAlert("Password needs to be greater than five characters","#ef5350 red lighten-1")
		 }
		 else{
			register({
				name,
				email,
				password,
			});
				 
}

		//else if (!email.contains("@")){
		// 	setAlert("Please enter a correct email address","#ef5350 red lighten-1")

		// }
		
	}
 


    return (
        <div className="forms">
       <h4>Register Here</h4>	
<div id="register-page" class="row">
	<div className="col s12 z-depth-6 card-panel">
		<form onSubmit={onSubmit} className="register-form">        
			<div className="row margin">
				<div className="input-field col s12">
					<i className="mdi-social-person-outline prefix"></i>
					<input value={name} onChange={onChange} type="text" name='name' className="validate"/>
					<label htmlFor="name" className="center-align">Name</label>
				</div>
			</div>
			<div className="row margin">
				<div className="input-field col s12">
					<i className="mdi-communication-email prefix"></i>
					<input value={email} onChange={onChange} id="user_email" name='email' type="email" className="validate"/>
					<label htmlFor="email" className="center-align">Email</label>
				</div>
			</div>
			<div className="row margin">
				<div className="input-field col s12">
					<i className="mdi-action-lock-outline prefix"></i>
					<input value={password} onChange={onChange} name='password' id="user_passw" type="password" className="validate"/>
					<label htmlFor="password">Password</label>
				</div>
			</div>
			<div className="row margin">
				<div className="input-field col s12">
					<i className="mdi-action-lock-outline prefix"></i>
					<input value={password2} onChange={onChange} name='password2' id="confirm_pass" type="password"/>
					<label htmlFor="password2">Re-type password</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<button type="submit" value ="Register" className="btn waves-effect waves-light col s12">Register Now </button>
				</div>
				{/* <div className="input-field col s12">
					<p className="margin center medium-small sign-up">Already have an account? <a href="login.php">Login</a></p>
				</div> */}
			</div>
		</form>
	</div>
</div>
</div>
    )
}

export default Register;

