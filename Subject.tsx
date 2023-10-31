import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Subject {
    _id: string;
    name: string;
    schedule: string;
};

function Subjects() {
    const [subjects, setSubject] = useState<Subject[]>([]);

    useEffect(() => {
        axios.get('http://localhost:9090/products/readall')
        .then((result) => setSubject(result.data))
        .catch((err) => console.log(err))
    }, [])

    const handleDelete = (_id: string) => {
        axios.delete(`http://localhost:9090/products/deleteproduct/${_id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className='btn btn-success'>Add + </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Shedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((subject, index) => (
                                    <tr key = {index}>
                                    <td>{subject.name}</td>
                                    <td>{subject.schedule}</td>
                                    <td>
                                    <Link to={`/update/${subject._id}`} className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Subjects;