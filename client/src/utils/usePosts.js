import { useEffect, useState } from "react";

import {getCampaigns} from "./contentful.js"; // Calling the contentfuls function
// that retrieves all of the our data.

const promise = getCampaigns(); 

export function useData() {
// Defined the states of the posts and the loading values
    const [posts, setPosts] = useState([]); // Starts empty as we don't have any data before fetching
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        promise.then(posts => {
            setPosts(posts)
            setLoading(false)
        })
    }, []);
    return [posts, isLoading]
}