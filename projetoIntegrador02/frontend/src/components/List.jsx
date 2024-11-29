// import axios from 'axios'
// import React from 'react'
import { Th } from '../styles/style';
import { Table, Button } from 'react-bootstrap'

const List = ({funcionarios, setFuncionarios}) => {

//  const [show, setShow] = React.useState(false)
//  const [ondEdit, setOnEdit] = React.useState(null)

//    const handleEdit = (funcionario) =>{
//     setShow(true)
//    }

//   const handleSubmitEdit = async (editedTarefa) => {
//     try {
//       await axios.put(`http://localhost:3333/tarefas/${editedTarefa.id}`, editedTarefa)
//       setTarefas((prevTarefas) => prevTarefas.map((tarefa) => (tarefa.is === editedTarefa.id ? editedTarefa : tarefa)))
//       setShow(false)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3333/api/tarefas/${id}`)
//       setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
//     } catch(error) {
//       console.log(error)
//     }
//   }

  return (
    <>
    <Table style={{marginLeft: "300px", marginTop: "30px"}} striped bordered hover>
      <thead>
        <tr>
          <Th>Nome</Th>
          <Th>Cargo</Th>
          <Th>Curso</Th>
          <Th>Status</Th>
          <Th>Data Inicio</Th>
          <th>Data Conclusão</th>
        </tr>
      </thead>
      {funcionarios.map((funcionario, index) => (
      <tbody key={index}>
        <tr>
          <td style={{borderRightColor: "inherit"}} >{funcionario.nome}</td>
          <td>{funcionario.cargo}</td>
          <td>{funcionario.curso}</td>
          <td>{funcionario.status_curso}</td>
          <td>{funcionario.data_inicio}</td>
          <td>{funcionario.data_conclusao}</td>
          {/* <td>            
            <Button variant="warning" onClick={() => handleEdit(tarefa)}>Editar</Button>
            <Button variant="danger" onClick={()=> handleDelete(tarefa.id)}>Deletar</Button>
          </td> */}
        </tr>
      </tbody>
      ))}
    </Table>
    {/* <EditForm show={show} handleClose={()=> setShow(false)} tarefa={ondEdit}/> */}
    </>
  );
}

export default List;