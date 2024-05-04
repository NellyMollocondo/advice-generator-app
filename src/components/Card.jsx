import { Button } from "./Button"
import { PatternDividerMobile } from "./PatternDividerMobile"
import { PatternDividerDesktop } from "./PatternDividerDesktop"
import { useState , useEffect} from "react"
import { getRandomAdvice } from "../services/advice"
import { useMediaQuery } from "react-responsive"

export function Card() {
    const [advice, setAdvice] = useState({})
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    })

    useEffect(() => {
        getRandomAdvice().then(newAdvice => setAdvice(newAdvice))
    }, [])

    const handleClick = () => {
        getRandomAdvice().then(newAdvice => setAdvice(newAdvice))
    }

    return (
        <>
            <article className="card">
                <h1 className="card__title">ADVICE {advice.id}</h1>
                {advice && <p className="card__advice">{advice.advice}</p>}
                {isDesktopOrLaptop ? <PatternDividerDesktop/> : <PatternDividerMobile />}
                <Button handleClick={handleClick} />
            </article>
        </>
    )
}