import React from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import EditTasks from './EditTasks';
import RegisterTasks from './RegisterTasks';

const ContentBeginning=()=>{
    return(
        <div>
          <div className="container d-flex my-5">
                <h4 className='letter_tittle mt-2 text-white mx-auto'>Tasks</h4>
          </div>
          <Card className='mx-auto my-5 p-4 text-white bg-secondary letter_table' style={{ width: '50rem' }}>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Priority</th>
                <th scope="col">Expiration</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bañar el perro</td>
                <td>1</td>
                <td>2/02/2021</td>
                <td><EditTasks/></td>
                <td><button className='btn btn_delete btn-danger'>Delete</button></td>
              </tr>
            </tbody>
          </table>
          </Card>
          <div>
            <RegisterTasks/>
          </div>
        </div>
    );
};

export default ContentBeginning;