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

  
    return (
        <div>
            <div className='contBtn'>
                <button className='menu'>Uy anjomlari</button>
                <button className='menu'>Barchasi</button>
                <button className='menu'>Osh xona</button>
                <button className='menu'>Dekor</button>
                <button className='menu'>Mebel</button>
                <button className='menu'>Kanselyariya</button>
                <button className='menu'>Aksesuarlar</button>
            </div>
            <div className='praductMenu'>
                <div className='contCord'>
                    {cord.map((item) => {
                        return (
                            <div key={item.id} className="cord">
                                <img src={item.image} width={"100%"} height={"296px"} alt={item.title} />
                                <div style={{ padding: "20px 20px" }}>
                                    <h3 style={{fontSize:"14px"}}>{item.title}</h3>
                                    {/* <h6>{item.description}</h6> */}
                                    <div style={{display:'flex',alignItems:'center',justifyContent:"space-between",marginTop:"14px"}}>
                                        <h2>{item.price} sum</h2>
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