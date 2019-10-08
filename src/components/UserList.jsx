import React from 'react'
import useResources from './useResources'
import List from '../reusable/List'

const UserList = () => {

    const user = useResources('users');
    return <List list={user} />;
}
export default UserList