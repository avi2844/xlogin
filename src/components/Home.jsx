import { useState } from "react";

function Home(){
    const [loggedIn, setloggedIn] = useState(false);
    const [isvalid, setIsValid] = useState(true);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData(prevData => ({...prevData, [e.target.name] : e.target.value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formData.username === "user" && formData.password === "password"){
            setIsValid(true);
            setloggedIn(true);
        }
        else{
            setIsValid(false);
            setloggedIn(false);
        }
    }

    return(
        <div>
            <h1>Login Page</h1>
            {isvalid|| <span>Invalid username or password</span>}
            {
                (loggedIn) ? <span>Welcome, user</span> : 
                <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" placeholder="username" required onChange={handleChange}></input><br />
                <label htmlFor="username">Password:</label>
                <input type="password" name="password" placeholder="password" required onChange={handleChange}></input><br />
                <button type="submit">Submit</button>
                </form>
            }
        </div>
    )
}

export default Home;