import React from 'react'
import Post from './Post'

export default ({posts}) => {
    if (!posts.length){
        return <div>ПОстов нет</div>
    }
    return posts.map(post => <Post post={post} key={post} />)
}