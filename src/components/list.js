import React from 'react'
import axios from 'axios'

class List extends React.Component{
    constructor(){
        super()
        this.state={
            bikes:{}
        }
    }

    componentDidMount(){
        axios.get("https://bikewise.org:443/api/v2/incidents")
            .then(response=>{
                console.log(response.data)
                const bikes=response.data
                this.setState({bikes})
            })
            .catch(err=>{
                console.log('err')
            })
    }
    
    render(){
        // const items=[]
        // for (const key in bikes){
        //     items.push(key)
        // }
        // console.log('item',items)
        return(
            <>
            <h1>hello</h1>
            <ul>
            {
                Object.keys(this.state.bikes).map(ele=>{
                return <li>{ele}
                {
                    this.state.bikes[ele].length !=0 && (
                        <ul>
                            {
                                this.state.bikes[ele].map(ele=>{
                                return <li key={ele.id}>{ele.address} <img src={ele.media.image_url_thumb}/></li>
                                })
                            }
                        </ul>
                    )
                }</li>
                })
            }
            </ul>
            

            
            </>
        )
    }
}
export default List