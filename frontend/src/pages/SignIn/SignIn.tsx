import { useState, ChangeEvent, MouseEvent, FormEvent } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Button } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main className="w-screen h-full lg:h-screen">
      <section className="w-full max-w-[1250px] h-full mx-auto flex justify-center items-center">
        <div className="w-full h-1/2 flex justify-between items-center lg:shadow-md rounded-md">
            <div className="hidden w-full h-full bg-blue-600 p-5 lg:flex justify-center items-center rounded-l-md">
                <h1 className="text-white font-bold text-5xl">Sign In</h1>
            </div>

            <div className="w-full h-screen lg:h-full p-5 flex flex-col justify-center items-center rounded-r-md">
                <div className="lg:hidden w-full p-5 flex justify-center items-center rounded-l-md">
                    <h1 className="text-blue-600 font-bold text-5xl">Sign In</h1>
                </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-start gap-5">
                    <FormControl variant="outlined" fullWidth margin="normal">
                    <TextField 
                        fullWidth 
                        label="Email" 
                        id="email" 
                        value={email}
                        onChange={handleEmailChange}
                    />
                    </FormControl>
                    <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                    <Link to="/sign-up" className="font-semibold text-blue-600 hover:underline cursor-pointer">Don't have an account yet?</Link>
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{paddingY: "1rem", fontWeight: 'bold'}}>
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
