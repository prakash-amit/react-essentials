import React from "react";
import {Link, useLocation, Outlet} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company website]</h1>
            <nav>
                <Link to = "about">About</Link>
                <Link to = "events">Events</Link>
                <Link to = "contact">Contact</Link>
            </nav>
        </div>
    )
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    )
}

export function Services() {
    return (
        <div>
            <h1>[Services]</h1>
        </div>
    )
}

export function Location() {
    return (
        <div>
            <h1>[Location]</h1>
        </div>
    )
}


export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}

export function Whoops404() {
    let location = useLocation();
    return (
        <div>
            <h1>resource not found at {location.pathname}</h1>
        </div>
    )
}