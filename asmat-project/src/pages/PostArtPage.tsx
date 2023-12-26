
import { useState } from "react";

export default function PostArtPage() {
 const [desc, setDesc] = useState('');
    const [link, setLink] = useState('');

    function post(){


    };


    return (

        <div>
            <b>Post your art</b><br></br>
            This site doesn't currently have such fancy things as image file hosting. Find another site to host your image (e.g. Flickr) and paste the link here. <small> It will be displayed as an image on the site, of course.</small> <br/>
            <br/>Link to image: <br/>
            <input value={link} onChange={e => setLink(e.target.value)} /><br/>
            Title/description/comment/whatever you want to say about it: <br/>
            <textarea value={desc} onChange={e => setDesc(e.target.value)} /> <br/>
            <button onClick={post}>Post</button>
            <hr></hr>

            <b>Your art:</b>
            <div>[art goes here lol]</div>
        </div>

    );


}