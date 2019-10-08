import React, { useState, useEffect } from "react";
import List from "../reusable/List";
import axios from "axios";

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);
    // const fetchResource = async (resource) => {
    //     const resp = await axios.get(
    //         `https://jsonplaceholder.typicode.com/${resource}`
    //     );
    //     setResources(resp.data);
    // };
    useEffect(() => {
        // fetchResource(resource);
        (async (resource) => {
            const resp = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            )
            setResources(resp.data);
        })(resource);
    }, [resource]);
    return <List resource={resources} />;
};
export default ResourceList;
