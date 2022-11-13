import React, {useState} from "react";
import Sidebar from "../sidebar/sidebar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import './Home.css';


export default function Home() {
    axios.defaults.withCredentials = true;

    const [file, setFile] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState(new Date());

    const submitForm = (event) => {
        event.preventDefault();

        const dataArray = new FormData();
        dataArray.append("title", title);
        dataArray.append("message", message);
        dataArray.append("file", file);


        axios.post("http://localhost:3001", dataArray, {
            headers: {
                "Content-Type": "multipart/data"
            }
        }) .then((res) => {
            //add successfully uploaded file
        }) .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div className="panel-home">
            <div className="row">
                <div className= "sidebar"><Sidebar/></div>
                
                <div className="home-component">
                        <form onSubmit={submitForm}>
                        <legend className="title">Weekly Campaign</legend>
                            <div className="form-container">
                                <label for="user-name">CAMPAIGN TITLE</label>
                                <input name="campaign-title" type="name" placeholder='campaign-title' required autoFocus onChange={(event) => setTitle(event.target.value)}/>
                                <label for="password"> MESSAGE</label>
                                <input name="campaign-text" type="text" placeholder="Message" required onChange={(event) => setMessage(event.target.value)} />

                                <input type="file" placeholder="image" required onSelect={(e) => setFile(e.target.file)}/>
                                <Calendar onChange={setDate}
                                value={date}/>
                            </div>
                            <div>
                                <button  type="submit" value="Submit">Submit</button>
                            </div>
                    </form>
                </div>
             
            </div>
        </div>
    )
}