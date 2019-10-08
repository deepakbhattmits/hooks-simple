import React from "react"
import List from "../reusable/List"
import useResources from './useResources'
const ResourceList = ({ resource }) => {
    const resources = useResources(resource);
    return <List list={resources} />;
};
export default ResourceList;
