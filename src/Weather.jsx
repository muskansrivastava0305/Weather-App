import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Weather() {
    const [data, setData] = useState({
        celcius: 0,
        name: 'London',
        humidity: 10,
        speed: 2
    })

    const [name, setName] = useState('')

    // useEffect(() => {
    //     const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=germany&appid=d7658c02c4d83bb9774ca0768698f85e&units=matric'
    //     axios.get(apiUrl)
    //     .then(res => {
    //         console.log(res.data)
    //         setData({...data, celcius: res.data.main.temp , name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed})
    //     })
    //     .catch(err => console(err));
    // },[])

    const handleClick = () => {
        if (name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d7658c02c4d83bb9774ca0768698f85e&units=matric`
            axios.get(apiUrl)
                .then(res => {
                    console.log(res.data)
                    setData({ ...data, celcius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed })
                })
                .catch(err => console(err));
        }
    }
    return (
        <div className='w-80 mx-auto justify-center items-center  bg-slate-500 border rounded-xl'>
            <div className=' p-2 mx-auto justify-center items-center'>
                <div className=' flex gap-2 w-full'>
                    <input type='text' placeholder='Enter City Name' className=' w-full p-1 text-xl' onChange={e => setName(e.target.value)} />
                    <button className=' w-9'><img src='search.png' className=' border rounded-xl' onClick={handleClick} /></button>
                </div>

                <div className=' w-32 mx-auto justify-center items-center'>
                    <img src='weather-icon-cloudy.png' alt='' />
                    <h1 className=' font-semibold text-white text-3xl'>{data.celcius}°C</h1>
                    <p className=' font-bold text-white text-xl'>{data.name}</p>
                </div>

                <div>
                    <div className=' flex justify-between'>
                        <div className=' w-16'>
                            <img src='humidity.png' alt='' className='  bg-slate-500' />
                            <p className=' font-medium text-white'>{data.humidity}%</p>
                            <p className=' font-medium text-white'>Humidity</p>
                        </div>
                        <div className=' w-16'>
                            <img src='wind.png' alt='' />
                            <p className=' font-medium text-white'> {data.speed} km/h</p>
                            <p className=' font-medium text-white'>Wind</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather