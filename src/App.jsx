import { useState } from "react";
import { useEffect } from "react";
import menuData from "./helpers/data";
import { Card, Modal } from "antd";

const App = () => {
    const Clicked = () => {
        return alert("This button clicked !");
    };

    const openModal = () => {
        <Modal>
            <h1>Haridingiz uchun raxmat !</h1>
        </Modal>;
    };
    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((result) => setComment(result));
    }, []);

    return (
        <div>
            <div className='flex flex-col items-center text-center mt-[20px]'>
                <h1 className='text-[#DC780B] text-base'>{menuData.title}</h1>
                <h1 className='text-[#150C01] text-3xl mb-[25px]'>
                    {menuData.text}
                </h1>
                <h1 className='max-w-[748px] text-[#150C01] text-base opacity-70'>
                    {menuData.comment}
                </h1>
                <div className='flex gap-[30px] flex-wrap p-[100px]'>
                    {/* <Card> */}
                    {/* {comment.map((item) => (
                            <div
                                key={item.id}
                                className='items-center justify-center'>
                                <div className='flex flex-col border-[1px] border-[#000] rounded items-center p-[25px] w-[360px] rounded-[40px]'>
                                    <div>
                                        <img
                                            src={item.image}
                                            alt='img'
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div className='flex'>
                                        <h1>{item.title}</h1>
                                        <p>{item.price}$</p>
                                    </div>
                                    <p className='max-w-[310px]'>
                                        {item.category}
                                    </p>
                                </div>
                            </div>
                        ))} */}
                    {comment.map((item) => (
                        <div key={item.id}>
                            <Card
                                onClick={openModal()}
                                hoverable
                                style={{
                                    width: 300,
                                }}>
                                <div>
                                    <div>
                                        <img src={item.image} alt='image' />
                                        <div className='flex flex-col justify-between'>
                                            <p className='mt-[10px]'>
                                                {item.title}
                                            </p>
                                            <p>{item.price}</p>
                                        </div>
                                        <p>{item.category}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <button
                                            onClick={Clicked}
                                            className='text-white rounded-[5px] bg-[#DC780B] py-[11px] px-[15px]'>
                                            +
                                        </button>
                                        <div className='flex gap-[1px]'>
                                            <p>{<menuData.star />}</p>
                                            <p>{<menuData.star />}</p>
                                            <p>{<menuData.star />}</p>
                                            <p>{<menuData.star />}</p>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                    {/* </Card> */}
                </div>
            </div>
        </div>
    );
};

export default App;
