import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Pagination({ setEvents }) {

    const [numOfEvent, setNumOfEvent] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const eventPerPage = 2;
    const numOfPages = numOfEvent / eventPerPage;
    const pages = [...Array(numOfPages)];

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events');
                const allEvents = await response.json()
                setNumOfEvent(allEvents.length);
            } catch (err) {
                console.error(err);
            }
        }
        fetchEvents()
    }, [setEvents]);

    useEffect(() => {
        async function fetchPage() {
            const res = await fetch(`/api/pagination?page=${currentPage}&eventPerPage=${eventPerPage}`);
            const events = await res.json();
            setEvents(events);
        }
        fetchPage();
    }, [currentPage, setEvents]);

    function prevPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
        }
    }

    function nextPage() {
        if (currentPage !== numOfPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
        }
    }

    function changePage(page) {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }



    return (
        <nav>
            <ul>
                <li>
                    <button onClick={prevPage}>Prev</button>
                </li>
                <li>
                    {pages.map((page, i) => (
                        <button key={i + 1} onClick={() => changePage(i + 1)}>{i + 1}</button>
                    ))}
                </li>
                <li>
                    <button onClick={nextPage}>Next</button>
                </li>
            </ul>
        </nav>
    )
}