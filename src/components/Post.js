import React from "react"

export default function Post(props) {
    return (
        <div className="post--card">
            <div>
                <img src={props.url} className="post--img" />
                <p className="post--name">Snowball</p>
                <p className="post--des">New York, NY</p>               
                <p className="post--des">American Domestic</p>
                <p className="post--des">8 Months</p>
                <p className="post--cap">Happy Final Everybody! Can't wait to have fun with friends after graduation!!! Hahahhahahhahaha Hahahahahhahaha :)</p>
            </div>
        </div>

        )
}