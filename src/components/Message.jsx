export default function Message({step}) {
    let msg;
    switch (step) {
        case 1:
            msg = `Step ${step}: Learn React ✨`
            break;
        case 2:
            msg = `Step ${step}: Get a Job 💼`
            break;
        case 3:
            msg = `Step ${step}: Invest in yourself 📈`
            break;

        default:
            msg = `Step is undefined, please try again.`
            break;
    }

    return <p className="message">{msg}</p>
}