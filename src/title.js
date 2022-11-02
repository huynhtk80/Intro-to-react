import { useState } from "react"

function Title() {
    return (
        <h1>Welcome to React Intro</h1>

    )
}

export const LittlestComponent = (props) => {
    let text = props.message;
    return <p>{text}</p>
}

const SecondLittlestComponent = (prop) => {
    const [fred, setFred] = useState();
    console.log("second Littlest Component")
    return <div />
}

export default Title;
export { SecondLittlestComponent };
