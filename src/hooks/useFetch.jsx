import axios from "axios"
import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const data = await axios.get(url)
            setData(data.data.data)
        } catch (err) {
            setError(err.message)

        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [url])
    return { data, loading, error }
}

export default useFetch