// import { useAlert } from 'react-alert'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyButton({ a = 'shopppp', st = 'yellow', c, h }) {
    // let coloured = 'green'
    const notify = (params) => toast(params);
    const [one, setOne] = useState()
    // const alert = useAlert()
    let arrayData = [
        { title: 'Cabbage', id: 1, fruit: 'no' },
        { title: 'Garlic', id: 2, fruit: 'no' },
        { title: 'Apple', id: 3, fruit: 'yes' },
    ]
    // if (fruit == 'yes') {
    //     console.log('green');

    // } else {
    //     console.log('red');

    // }
    const handleClick = (params) => {
        console.log('button clicked');
        let a=10
        let b=20
        let c=a+b
        setOne(c)
        notify(c)
    }

    return (
        <>
            {/* <button onClick={handleClick} className='danger' style={{ color: c, height: h }}>{a}</button> */}
            <button onClick={handleClick}>Notify! {one} data</button>
            {/* <div style={{ display: 'flex' }}>
                {arrayData.map((a) =>
                    <div className={a.fruit == 'yes' ? 'green':'red'}>{a.title} --</div>
                )}


            </div> */}
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
        </>
    )
}

export default MyButton