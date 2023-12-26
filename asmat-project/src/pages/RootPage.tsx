import { Link, Outlet } from "react-router-dom";

import '../App.css'

export default function RootPage() {



    return (
        <>
            <div>
                <table id='nav' >
                    <tr>
                        <th style={{ width: '83%' }}><h3>Sam's Asocial Art Site</h3></th>
                        <th style={{ width: '17%' }}> Navigation</th>
                    </tr>
                    <tr>

                        <td> <div>
                            <Outlet></Outlet>
                        </div></td>
                        <td>
                            <div>
                                <table id='nav2'>
                                    <tr>
                                        <Link to='/post-art'> Post Art! </Link>
                                    </tr>
                                    <tr>
                                        <Link to='/login'> Login </Link>
                                    </tr>
                                </table>

                                <br />
                                <table id='nav2'>
                                    <tr>
                                        <Link to='/'> Home </Link>
                                    </tr>
                                    <tr>
                                        <Link to='/'> Newest </Link>
                                    </tr>

                                    <tr>
                                        <Link to='/guestbook'>Guest book </Link>
                                    </tr>
                                </table>
                                <br></br>
                                Artists:

                                <table id='artists'>
                                    <tr>
                                        <Link to='/'> Livecrows </Link>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

        </>
    )

}

