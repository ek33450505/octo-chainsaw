

const LoginSignup = () => {
    return (
        <div>
            <h3>Login</h3>
            <div>
                <form>
                    <input
                        placeholder='Email'
                        name='email'
                        type='email'
                    />
                    <input
                        placeholder='Password'
                        name='password'
                        type='password'
                    />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
            <h3>Signup</h3>
            <div>
                <form>
                    <input
                        placeholder='username'
                        name='username'
                        type='text'
                    />
                    <input
                        placeholder='Email'
                        name='email'
                        type='email'
                    />
                    <input
                        placeholder='Password'
                        name='password'
                        type='password'
                    />
                    <input
                        placeholder='Zipcode'
                        name='zipcode'
                        type='number'
                    />
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginSignup;
