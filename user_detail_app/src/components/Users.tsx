import { useEffect, useState } from "react"
import { IUsers } from "../models/IUsers"
import { UsersService } from "../services/UsersService"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

interface IState{
    loading:boolean,
    users: IUsers[],
    errormsg: string
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
  ];
const Users = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        users: [] as IUsers[],
        errormsg: ''
    })


    // Network request and sending the recievd data to  the state
    useEffect(() => {
        setState({...state, loading: true})
        UsersService.getAllUsers()
        .then(res => setState({
            ...state, 
            loading: false, 
            users: res.data
        })).catch(err => setState({
            ...state,
            loading: false,
            errormsg: err.message
        }))
    }, [])

    const{loading, users, errormsg} = state
    const rows = users?.map(x => ({ id: x.id, name: x.name, username: x.username, email: x.email }));
    
  
  return (
    <>
    <h3>
        Users Data from API
    </h3>
    {errormsg && (<p>{errormsg}</p>)}
    {loading && (<p>Loading...</p>)}
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    
    </>
  )
}

export default Users