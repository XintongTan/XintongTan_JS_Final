import React from "react";
import HandleTag from "./HandleTag"
import breedsInfo from "./breedsInfo"
import Post from "./Post"

export default function Main() {

    const [post, setPost] = React.useState([])

    const [allPost, setAllPost] = React.useState({
        id: 0,
        search:""
    })

    const [count, setCount] = React.useState(1)

    React.useEffect(() => {
        async function getCat() {
            const url = `https://api.thecatapi.com/v1/images/search?limit=6&${allPost.search}`
            const options = {
                method: "GET",
                headers: {
                    "x-api-key": "DEMO-APd43099a0-6acc-49e7-93d6-d3b79738b2e0I-KEY"
                },
            }
            const res = await fetch(url, options)
            const data = await res.json()
            setPost(data)
            console.log(url)
        }
        getCat()
    }, [count])

    const postElement = post.map(items => (
        <Post url={items.url} />
        ))


    function getRandom() {
        setAllPost(prevItem => ({
            ...prevItem,
            search: ""
        }))
        setCount(prevCount => prevCount + 1)       
        console.log("post!")
    }

    function getFunny() {
        setAllPost( prevItem => ({
            ...prevItem,
            search: "category_ids=3"
        }))
        setCount(prevCount => prevCount + 1)     
    }

    function getHats() {
        setAllPost( prevItem => ({
            ...prevItem,
            search: "category_ids=1"
        }))
        setCount(prevCount => prevCount + 1)     
    }

    function getKittens() {
        setAllPost(  prevItem => ({
            ...prevItem,
            search: "category_ids=10"
        }))
        setCount(prevCount => prevCount + 1)   
    }

    function getSunglasses() {
        setAllPost( prevItem => ({
            ...prevItem,
            search: "category_ids=4"
        }))
        setCount(prevCount => prevCount + 1)
    }

    function getClothes() {
        setAllPost( prevItem => ({
            ...prevItem,
            search: "category_ids=15"
        }))
        setCount(prevCount => prevCount + 1)       
    }

    const [breedTag, setBreedTag] = React.useState(breedsInfo)

    const breedElements = breedTag.map( btag => (
        <HandleTag on={btag.on} name={btag.name} img={btag.imgIcon} breedId={btag.breedId} id={btag.id} key={btag.id}  />
        )
    )

    return (
        <>
            <div className="tag" >
                {breedElements}
            </div>
            <div className = "tag--cateDisplay">
                <button className="tag--cate" onClick={getRandom} >
                    <h3>Random Pic</h3>
                </button>
                <button className="tag--cate" onClick={getFunny} >
                    <h3>Funny</h3>
                </button>
                <button className="tag--cate" onClick={getHats} >
                    <h3>Hats</h3>
                </button>
                <button className="tag--cate" onClick={getKittens} >
                    <h3>Kittens</h3>
                </button>
                <button className="tag--cate" onClick={getSunglasses} >
                    <h3>Sunglasses</h3>
                </button>
                <button className="tag--cate" onClick={getClothes} >
                    <h3>Clothes</h3>
                </button>
            </div>
            <div className = "post">       
                 {postElement}
            </div>
        </>
        )
}