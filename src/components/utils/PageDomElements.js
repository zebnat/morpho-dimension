import React from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames'

export const PageH1 = ({ className, children }) => {
    return <h1 className={classNames("text-2xl font-bold", className)}>{children}</h1>
}

export const PageH2 = ({ className, children }) => {
    return <h2 className={classNames("text-xl font-medium", className)}>{children}</h2>
}

export const PageH3 = ({ className, children }) => {
    return <h3 className={classNames("text-lg font-medium", className)}>{children}</h3>
}

export const PageP = ({ className, children }) => {
    return <p className={classNames("py-2", className)}>{children}</p>
}

export const SpreadedLinks = ({ list }) => {
    return (
        <ul className="flex justify-evenly flex-wrap">
            {list.map(({ to, anchor, router }) => router ?
                <li key={to} className="m-2 p-1 rounded bg-purple-500 text-white"><Link to={to}>{anchor}</Link></li> :
                <li key={to} className="m-2 p-1 rounded bg-purple-500 text-white">
                    {
                        !to ? anchor : <a key={to} href={to} target="_blank" rel="noopener noreferrer">{anchor}</a>
                    }
                </li>

            )}
        </ul>)
}