import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import '../index.css';
import ControlledOpenSelect from './rolDropDown.js';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { deleteUsers, getUsers } from "../actions/adminLoginActions";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData(
//     "cblancodelavega@udesa.edu.ar",
//     "Camilo",
//     "Blanco",
//     "SKERET",
//     "Admin"
//   ),
//   createData(),
//   createData(),
//   createData()
// ];

const BasicTable = () => {
  const classes = useStyles();
  const  { users, loading, error } = useSelector (state => state.getUsers)
  const  Camilo  = useSelector (state => state.getUsers)
  console.log("HOLA", Camilo);
  console.log("USERS", users);

  const dispatch = useDispatch();

  const handlerDelete = async (id) => {
    await dispatch(deleteUsers(id))
    await dispatch(getUsers())
  }

  return (
    <>
      <br />
      {loading ? (<div>Loading...</div>) : error ? (<div>no esta funcionando{error}</div>) : (
        <TableContainer component={Paper}>
          <div id="adm-usuarios">
            <Typography variant="h6" id="tableTitle">
              Administracion de Usuarios
            </Typography>
          </div>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>E-mail</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Apellido</TableCell>
                <TableCell align="center">Contraseña</TableCell>
                <TableCell align="center">Rol</TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.email}
                  </TableCell>
                  <TableCell align="center">{user.firstname}</TableCell>
                  <TableCell align="center">{user.lastname}</TableCell>
                  <TableCell align="center">{user.password}</TableCell>
                  <TableCell align="center">
                    <ControlledOpenSelect />
                  </TableCell>
                  <TableCell align="center">
                    <SaveIcon onClick={() => alert("Guardar")} />

                    <DeleteIcon onClick={() => handlerDelete(user.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
    }</>
  )
}

export default BasicTable;