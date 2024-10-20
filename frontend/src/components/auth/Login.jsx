import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { IoCopy } from "react-icons/io5";
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

    const { loading, user } = useSelector((store) => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    // Function to fill in the test credentials only
    const fillTestCredentials = (email, password, role) => {
        setInput({ email, password, role });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));

        try {
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });

            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
                navigate("/");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex items-center justify-center flex-grow">
                <form onSubmit={submitHandler} className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 m-4">
                    <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
                    <div className="mb-4">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Enter Your Email"
                            className="mt-1 rounded-full"
                        />
                    </div>
                    <div className="mb-4 ">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Enter Your Password"
                            className="mt-1 rounded-full"
                        />
                    </div>
                    <div className="mb-6">
                        <Label className="block mb-3">Select Role</Label>
                        <RadioGroup className="flex items-center gap-4 ">
                            <div className="flex items-center">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer h-5 w-5 border-gray-300 text-green-600 focus:ring-green-500"
                                />
                                <Label htmlFor="r1" className="ml-2">Student</Label>
                            </div>
                            <div className="flex items-center  ">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer h-5 w-5 border-gray-300 text-green-600 focus:ring-green-500"
                                />
                                <Label htmlFor="r2" className="ml-2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 my-4">
                        {loading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : "Login"}
                    </Button>
                    <p className="text-sm text-center">
                        Don't have an account? 
                        <Link to="/signup" className='text-blue-600 hover:underline ml-1'>Signup</Link>
                    </p>
                    <div className="mt-6 text-center">
                        <p className="text-gray-500 text-sm">Test Credentials:</p>
                        <div className="flex justify-center items-center gap-4">
                            <div>
                                <p className="text-gray-600 text-sm">Email: <strong>test@gmail.com</strong> | Password: <strong>test</strong></p>
                                <Button
                                    type="button"
                                    className="mt-2 text-sm text-white hover:bg-blue-600 rounded-full"
                                    onClick={() => fillTestCredentials("test@gmail.com", "test", "student")}
                                >

                                    {/* copy icon */}
                                    <IoCopy />

                                </Button>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Email: <strong>admin@gmail.com</strong> | Password: <strong>admin</strong></p>
                                <Button
                                    type="button"
                                    className="mt-2 text-sm text-white rounded-full hover:bg-green-600 "
                                    onClick={() => fillTestCredentials("admin@gmail.com", "admin", "recruiter")}
                                >
                                    <IoCopy />
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
