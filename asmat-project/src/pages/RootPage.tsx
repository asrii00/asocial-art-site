import { Link, Outlet, useNavigate } from "react-router-dom";

import '../App.css'

export default function RootPage() {
    const navigate = useNavigate()

 

    return (
        <>
            <div>
                <table id='nav' >
                    <tr>
                        <th>Sam's Asocial Art Site</th>
                        <th> Navigation</th>
                    </tr>
                    <tr>

                        <td> <div>
                            <Outlet></Outlet>
                        </div></td>
                        <td>
                            <div>
                                
                                    <tr>
                                        <Link to='/'> Home </Link>
                                    </tr>
                                    <tr>
                                        <Link to='/'> Newest </Link>
                                    </tr>
                                    <tr>
                                        <Link to='/'>Guest book </Link>
                                    </tr>

                                
                                
                            </div>
                            
                        </td>
                        
                    </tr>
                   

                </table>
            </div>

        </>
    )

}

