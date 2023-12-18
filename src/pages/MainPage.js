import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import axios from "axios"
import './MainPage.scss'
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function MainPage() {
    const [message, setMessage] = useState('Завантаження...')
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get(
            'https://medical-articles-live.p.rapidapi.com/journals',
            {
                headers: {
                    "X-RapidAPI-Key": 'ee4f9cf3d5mshe450216970bd5c4p1e7f7bjsna37c7b1d3aee',
                    'X-RapidAPI-Host': 'medical-articles-live.p.rapidapi.com'
                }
            }
        ).then(res => {
            setArticles(res.data)
            setMessage(false)
        }).catch(res => {
            setMessage('Виникла помилка отримання інформації :(')
        })
    }, [])

    return (
        <div>
            <Header />
            {message && <h1>{message}...</h1>}
            {!message &&
                <div>
                    <hr />
                    <h2>Список наукових публікацій</h2>
                    <hr />
                    <Cards articles={articles} />
                </div>
            }
            <Footer />
        </div>
    );
}