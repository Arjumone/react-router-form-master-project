
import useInputState from '../../hooks/useInputState';

const CustomHookForm = () => {
    // const [name,handleNameChange] = useInputState('Arju')
    const emailState = useInputState('arju@kjk.com')
    const handleSubmit = e =>{
        // console.log(name);
        console.log(emailState.value);
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" name="submit" />
                <br />
            </form>
        </div>
    );
};

export default CustomHookForm;