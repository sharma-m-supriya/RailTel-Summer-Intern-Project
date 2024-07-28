// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import passwordIcon from '../Assests/password.png';
// import personIcon from '../Assests/person.png';

// const Login = () => {
//     const [action, setAction] = useState("Login");
//     const [username, setUsername] = useState(''); 
//     const [password, setPassword] = useState(''); 
//     const [error, setError] = useState(''); 
//     const navigate = useNavigate(); 

//     useEffect(() => {
//         localStorage.removeItem('isAuthenticated');
//     }, []);

//     const handleLogin = () => {
//         if (username === 'admin' && password === 'admin') {
//             localStorage.setItem('isAuthenticated', 'true');
//             navigate("/home"); 
//         } else {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <div className='flex h-screen'>
//             <div className='flex flex-col justify-center items-center w-1/3 bg-gray-800 p-10 animate-fadeIn'>
//                 <div className='flex flex-col items-center gap-1.5 w-full'>
//                     <div className='text-white text-4xl font-bold animate-fadeIn'>{action}</div>
//                     <div className='w-16 h-1.5 bg-white rounded-full animate-fadeIn'></div>
//                 </div>
//                 <div className='mt-11 flex flex-col gap-6'>
//                     <div className='flex items-center w-[350px] h-[50px] border border-gray-200 bg-gray-100 rounded-lg animate-fadeIn'>
//                         <img src={personIcon} alt='Person Icon' className='mx-[30px]' />
//                         <input
//                             type='text'
//                             placeholder='Username'
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             className='h-[50px] w-[400px] bg-transparent border-none text-base text-gray-700 outline-none'
//                         />
//                     </div>
//                     <div className='flex items-center w-[350px] h-[50px] border border-gray-200 bg-gray-200 rounded-lg animate-fadeIn'>
//                         <img src={passwordIcon} alt='Password Icon' className='mx-[30px]' />
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className='h-[50px] w-[400px] bg-transparent border-none text-base text-gray-700 outline-none'
//                         />
//                     </div>
//                 </div>
//                 {error && <div className='text-red-500 mt-2'>{error}</div>}
//                 <div className='flex justify-center items-center gap-7.5 mt-7.5 animate-fadeIn'>
//                     <div 
//                         className={`flex justify-center items-center w-[220px] h-[59px] text-white font-bold rounded-full cursor-pointer transition-colors duration-300 ${action === 'Login' ? "bg-blue-800" : "bg-blue-700 hover:bg-blue-900"}`}
//                         onClick={handleLogin}
//                     >
//                         Login
//                     </div>
//                 </div>
//             </div>

//             <div className='w-2/3 bg-black'>
//                 {/* This section is intentionally left blank */}
//             </div>
//         </div>
//     );
// };

// export default Login;
// import React, { useState, useEffect } from 'react';

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import passwordIcon from '../Assests/password.png';
// import personIcon from '../Assests/person.png';
// import connected from '../Assests/connected.png';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         localStorage.removeItem('isAuthenticated');
//     }, []);

//     const handleLogin = () => {
//         if (username === 'admin' && password === 'admin') {
//             localStorage.setItem('isAuthenticated', 'true');
//             navigate("/page3");
//         } else {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <div className='flex h-screen'>
//             <style>
//                 {`
//                 @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

//                 /* Optional: Customize other text styles */
//                 .courier-prime-regular {
//                     font-family: 'Courier Prime', monospace;
//                     font-weight: 400;
//                     font-style: normal;
//                 }

//                 .courier-prime-bold {
//                     font-family: 'Courier Prime', monospace;
//                     font-weight: 700;
//                     font-style: normal;
//                 }
//                 `}
//             </style>

//             <div className='flex flex-col justify-center items-center w-full md:w-1/3 bg-black bg-opacity-90 p-10 border-gray-600 border-r-2 relative'>
//                 <div className='absolute inset-0 opacity-25'></div>
//                 <div className='relative w-full max-w-md'>
//                 <h2 className='text-4xl font-bold text-white mb-8 courier-prime-bold'>Login</h2>
//                     <div className='flex flex-col gap-4'>
//                         <div className='flex items-center my-6'>
//                             <div className='flex-grow border-t border-gray-600'></div>
//                         </div>
//                         <div className='flex items-center border border-gray-900 rounded-lg bg-gray-800'>
//                             <img src={personIcon} alt='Person Icon' className='mx-4' />
//                             <input
//                                 type='text'
//                                 placeholder='Email'
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 className='flex-grow py-3 text-base bg-transparent border-none outline-none text-white placeholder-gray-500 rounded-lg courier-prime-regular'
//                             />
//                         </div>
//                         <div className='flex items-center border border-gray-600 rounded-lg bg-gray-800'>
//                             <img src={passwordIcon} alt='Password Icon' className='mx-4' />
//                             <input
//                                 type='password'
//                                 placeholder='Password'
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className='flex-grow py-3 text-base bg-transparent border-none outline-none text-white placeholder-gray-500 rounded-lg courier-prime-regular'
//                             />
//                         </div>
//                         <button
//                             className='w-full py-3 mt-6 text-white font-bold rounded-md bg-green-700 hover:bg-gray-300 courier-prime-bold'
//                             onClick={handleLogin}
//                         >
//                             Log In
//                         </button>
//                     </div>
//                     {error && <div className='mt-4 text-red-500'>{error}</div>}
//                 </div>
//             </div>
//              <div className='hidden md:flex md:w-2/3 items-center justify-center bg-gradient-to-r from-black to-green-700 bg-cover'>
//                 <div className='text-white text-xl text-center flex items-center justify-center h-full courier-prime-regular'>
//                 <p>
//             RailTel Corporation a "Mini Ratna (Category-I)" PSU is one of the largest neutral telecom infrastructure providers in the country owning a Pan-India optical fiber network. The OFC network covers all important towns & cities of the country and several rural areas covering 70% of India’s population.
//           </p>
//                 </div>
//             </div> 
//         </div>
//     );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import passwordIcon from '../Assests/password.png';
import personIcon from '../Assests/person.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('isAuthenticated');
    }, []);

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate("/page3");
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='flex h-screen justify-center items-center bg-gradient-to-r from-black to-green-700'>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

                .courier-prime-regular {
                    font-family: 'Courier Prime', monospace;
                    font-weight: 400;
                    font-style: normal;
                }

                .courier-prime-bold {
                    font-family: 'Courier Prime', monospace;
                    font-weight: 700;
                    font-style: normal;
                }
                `}
            </style>

            <div className='flex flex-col justify-center items-center w-full md:w-1/3 bg-black bg-opacity-90 p-10'>
                <div className='absolute inset-0 opacity-25'></div>
                <div className='relative w-full max-w-md'>
                    <h2 className='text-4xl font-bold text-white mb-8 courier-prime-bold'>Login</h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center my-6'>
                            <div className='flex-grow border-t border-gray-600'></div>
                        </div>
                        <div className='flex items-center border border-gray-900 rounded-lg bg-gray-800'>
                            <img src={personIcon} alt='Person Icon' className='mx-4' />
                            <input
                                type='text'
                                placeholder='Email'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='flex-grow py-3 text-base bg-transparent border-none outline-none text-white placeholder-gray-500 rounded-lg courier-prime-regular'
                            />
                        </div>
                        <div className='flex items-center border border-gray-600 rounded-lg bg-gray-800'>
                            <img src={passwordIcon} alt='Password Icon' className='mx-4' />
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='flex-grow py-3 text-base bg-transparent border-none outline-none text-white placeholder-gray-500 rounded-lg courier-prime-regular'
                            />
                        </div>
                        <button
                            className='w-full py-3 mt-6 text-white font-bold rounded-md bg-green-700 hover:bg-gray-300 courier-prime-bold'
                            onClick={handleLogin}
                        >
                            Log In
                        </button>
                    </div>
                    {error && <div className='mt-4 text-red-500'>{error}</div>}
                </div>
            </div>
        </div>
    );
};

export default Login;
