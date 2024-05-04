const ADVICE_ENDPOINT = 'https://api.adviceslip.com/advice'

export const getRandomAdvice = async () => {
    const res = await fetch(ADVICE_ENDPOINT)
    const data = await res.json()
    const { slip } = data
    return slip            
}