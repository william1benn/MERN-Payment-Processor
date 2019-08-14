import React, { useState,useContext,useEffect } from 'react';
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';


const Login = (props) =>{
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

const {setAlert}=alertContext;
const {login,error,clearErrors,isAuthenticated}=authContext;

useEffect(()=>{
	if(isAuthenticated){
		props.history.push('/')
	}
	if(error==='Invalid Credentials'){
		setAlert(error,'#ef5350 red lighten-1');
		clearErrors();
	}
	//eslint-disable-next-line
},[error,isAuthenticated,props.history])


    const [user,setUser] = useState({
        email:'',
        password:'',
    });

    //Dest
    const {name, email, password, password2 } = user;

	const onChange = (e) => setUser({...user,[e.target.name]:e.target.value});

	const onSubmit = (e) => {
		e.preventDefault();

		if(email===''||password ===''){
		setAlert("Please enter all fields","#ef5350 red lighten-1")
		}else{
		         login({
				email,
				password,
			})
			//.then(()=>{
			// 	 props.theCurrentUser();
			// })
		}
	}
 


    return (
        <div className="forms">
       <h4>Login</h4>	
<div id="register-page" class="row">
	<div className="col s12 z-depth-6 card-panel">
		<form onSubmit={onSubmit} className="register-form">        
			<div className="row margin">
			</div>
			<div className="row margin">
				<div className="input-field col s12">
					<i className="mdi-communication-email prefix"></i>
					<input value={email} onChange={onChange} id="user_email" name='email' type="email" className="validate"/>
					<label htmlFor="email" className="center-align">Email</label>
				</div>
			</div>
			<div class="row margin">
				<div className="input-field col s12">
					<i className="mdi-action-lock-outline prefix"></i>
					<input value={password} onChange={onChange} name='password' id="user_passw" type="password" className="validate"/>
					<label htmlFor="password">Password</label>
				</div>
			</div>
		
			<div className="row">
				<div className="input-field col s12">
					<button type="submit" value ="Login" className="btn waves-effect waves-light col s12">Login</button>
				</div>
			</div>
		</form>
	</div>
</div>
</div>
    )
}

export default Login;
