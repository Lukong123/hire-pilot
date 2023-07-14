import React, {useState, useEffect, useMemo} from 'react';
// import './AllJobs.css';
import axios, { Axios } from 'axios';
// import Table from './Table';


const client = axios.create({
    baseURL: "http://127.0.0.1:8000/HirePilot/alljobs/"
});
function TableJxobs() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        client.get('?_limit=10').then((response) =>{
            setPosts(response.data)
        })
    })
    const [joke, setJokes] = useState("");
    const getJoke = () => {
        axios.get("http://127.0.0.1:8000/HirePilot/alljobs/").then(
        (response) => {
            // console.log(response)
            setJokes(response.data.title + "..." + response.data.company.company_name)
        }
    )

    }
 return (  
    <div className='test'>
        {/* <SidebarEmployer/> */}
        {/* <Table columns={columns} data={data} />
         */}
        <div className="app">
    <h2>All Posts 📫</h2>
    {posts.map((post) => {
       return (
          <div className="post-card" key={post.id}>
             <h2 className="post-title">{post.company_name}</h2>
             <p className="post-body">{post.body}</p>
             <div className="button">
                <div className="delete-btn">Delete</div>
             </div>
          </div>
           );
        })}
      </div>
     
    </div>
  )
}

export default TableJxobs;