import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';


import './Chat.css';

const ENDPOINT = 'localhost:5000';
let socket;

const Chat =({location})=>{
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    useEffect(()=>{
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join',{name,room})

    },[ENDPOINT,location.search]);
    
    
    return(
        <h1>Chat here</h1>
    )
}

export default Chat;