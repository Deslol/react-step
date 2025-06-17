import {useState} from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    const [step, setStep] = useState(1)

    const previousHandler = () => {
        setStep((prevStep) => prevStep > 1 ? prevStep - 1 : 1)
    }

    const nextHandler = () => {
        setStep((prevStep) => prevStep < 3 ? prevStep + 1 : 3)
    }

    return (
        <div className='steps'>
            <div className='numbers'>
                <div className={step === 1 && 'active'}>1</div>
                <div className={step === 2 && 'active'}>2</div>
                <div className={step === 3 && 'active'}>3</div>
            </div>

            <p className="message">Hello</p>

            <div className="buttons">
                <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={previousHandler}>
                    Previous
                </button>

                <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={nextHandler}>
                    Next
                </button>
            </div>
        </div>
    )
}