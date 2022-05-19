import React from "react"

export default function HandleTag(props) {

    const [breedData, setBreedData] = React.useState([])

    const [post, setPost] = React.useState({
        image: "",
        des:""

    })

    React.useEffect(() => {

            async function getCat() {
                const url = `https://api.thecatapi.com/v1/images/search?breed_id=${props.breedId}`
                const options = {
                    method: "GET",
                    headers: {
                        "x-api-key": "DEMO-APd43099a0-6acc-49e7-93d6-d3b79738b2e0I-KEY"
                    }
                }
                const res = await fetch(url, options)
                const data = await res.json()
                setBreedData(data)
                console.log("!")
            }
            getCat()
        }, [])

    const [on, setOn] = React.useState(props.on)
    const [show, setShow] = React.useState(true)

    function getPost() {
        if (show) {
            console.log("click!")
            console.log(breedData)
            const url = breedData[0].url
            const description = breedData[0].breeds[0].description
            const temp = breedData[0].breeds[0].temperament
            setPost(prevPost => ({
                image: url,
                des: `Facts: ${description}`,
                keyW: `Keywords: ${temp}`
            }))
        } else {
            console.log("hide!")
            setPost(prevPost => ({
                image: "",
                des: ""

            }))
        }

    }

    function changeShow() {
        setShow(prev => (!prev))
        getPost()
        setOn(prev => (!prev))
    }
      
    const styles = {
        backgroundColor: on ? "#EBCB8B" : "white"
    }

    return (
        <>
            <div className="tag--breed"  style={styles} onClick={changeShow} >
                <img src={process.env.PUBLIC_URL + `/img/breed${props.id}.png`} className="tag--img" />
                <h4>{props.name}</h4>
            </div>
            <div className="tag--de">
                <img src={post.image} className="de--img" />
                <span className="de--text">{post.des}</span>                
            </div>
        </>
     )
}