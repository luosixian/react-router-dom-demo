import React from 'react'
import { useParams } from 'react-router-dom'

const Detail_data = [
    { id: '01', content: 'hello id1' },
    { id: '02', content: 'hello id2' },
    { id: '03', content: 'hello id3' },
]

export default function Detail() {
    console.log(useParams());
    const { id, title } = useParams();
    const findRes = Detail_data.find(detailObj => detailObj.id === id)
    return (
        <ul>
            <li>ID: {id}</li>
            <li>Title: {title}</li>
            <li>Content: {findRes.content}</li>
        </ul>
    );
}

/* export default class index extends Component {
    render() {
        console.log(this.props);
        return (
            <ul>
                <li>ID: ???</li>
                <li>Title: ???</li>
                <li>Content: ???</li>
            </ul>
        )
    }
} */
