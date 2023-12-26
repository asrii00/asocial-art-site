import { useState } from "react";

export default function GuestBook() {
    const [comment, setComment] = useState('');


    function post() {


    };


    return (

        <div>
            <h2> Guest Book</h2>
            You may leave comments. Try to be nice, or you will get banned. <br />

            There are no modern emojis, but you can always copy and paste one of these: <br />

            <table id='emoji'>
                <tr>
                    <td>:)</td>
                    <td>:D</td>
                    <td>;)</td>
                    <td>B)</td>
                </tr>
                <tr>
                    <td>:(</td>
                    <td>:'(</td>
                    <td>D:</td>
                    <td>:c</td>
                </tr>
                <tr>
                    <td>:O</td>
                    <td>:I</td>
                    <td>:/</td>
                    <td>:3</td>
                </tr>


            </table>

            <div>

                <b>Comment</b><br></br>
                <textarea value={comment} onChange={e => setComment(e.target.value)} /> <br />
                <button onClick={post}>

                    Send</button>
            </div>
        </div>

    );


}