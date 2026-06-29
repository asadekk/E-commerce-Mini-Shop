import React, { useEffect, useState } from 'react'
import { getCord } from '../ApiServers/userServers'


interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

function ProductCard() {
    const [cord, setCord] = useState<Product[]>([]);
    const [category, setCategory] = useState("Barchasi")


    async function fetchCord() {
        try {
            const res = await getCord();
            setCord(res.data);
        } catch (error) {
            console.error("Ma'lumot yuklashda xatolik:", error);
        }
    }

    useEffect(() => {
        fetchCord();
    }, []);

    const filteredProducts =
        category === "Barchasi"
            ? cord
            : cord.filter((product) => product.category === category);



    return (
        <div>
            <div className='contBtn'>
                <button className='menu' onClick={() => setCategory("Barchasi")}>Barchasi</button>
                <button className='menu' onClick={() => setCategory("men's clothing")}>Erkaklar kiyimi</button>
                <button className='menu' onClick={() => setCategory("jewelery")}>Taqimchoq</button>
                <button className='menu' onClick={() => setCategory("electronics")}>electronics</button>
                <button className='menu' onClick={() => setCategory("women's clothing")}>Ayol kiyimi</button>
            </div>
            <div className='praductMenu'>
                <div className='contCord'>
                    {filteredProducts.map((item) => {
                        return (
                            <div key={item.id} className="cord">
                                <img className='imgCord' src={item.image} width={"295"} height={"295px"} alt={item.title} />
                                <div style={{ padding: "20px 20px" }}>
                                    <div className='cordName'>
                                        <h3 className='cordTitle'>{item.title.slice(0, 50) + '...'}</h3></div>
                                        <h6 className='cordDescrip'>{item.description.slice(0,50) + '...'}</h6>
                                    <div className='cordPrice'>
                                        <h2 className='cordPrice'>{item.price} 000 sum</h2>
                                        <img src="https://img.icons8.com/?size=100&id=qP17ftfJdw0t&format=png&color=000000" width={"40px"} height={"40px"} alt="" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;