import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import FullCard from "../components/FullCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CardPage() {
    const [article, setArticle] = useState()
    const [message, setMessage] = useState('Завантаження....')
    const location = useLocation()
    const id = location.state?.data;

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
            setArticle(res.data.filter(d => d.url.includes(id))[0])
            setMessage(false)
        }).catch(res => {
            setMessage('Виникла помилка отримання інформації :(')
        })
    }, [])

    return (
        <div>
            <Header />
            {message && <h1>{message}</h1>}
            {!message && <div><FullCard article={article} /></div>}
            <Footer />
        </div>
    )

}

