'use client'
import React from 'react';
import CountUp from "react-countup";

function CountUpDividerClient() {
    return (
        <>
            {/*counter divider mobile*/}
            <div
                className="h-72 bg-[#4f5d32] text-white flex flex-col items-center justify-center space-y-4 font-medium sm:hidden">
                <div className="flex flex-col items-center">
                    <CountUp enableScrollSpy={true}
                             end={520} duration={5}
                             suffix="+"
                             className="text-7xl font-bold"/>
                    <p className="text-xl">CLIENTES SATISFECHOS</p>
                </div>
                <div className="flex flex-col items-center">

                    <CountUp enableScrollSpy={true}
                             end={230} duration={2}
                             suffix="+"
                             className="text-7xl font-bold"/>
                    <p className="text-xl">PROYECTOS EXITOSOS</p>
                </div>
            </div>

            {/*counter divider medium breakpoint*/}
            <div
                className="h-[20dvh] bg-[#4f5d32] text-white items-center justify-around font-semibold py-4 px-12 hidden sm:flex cursor-default">
                <div className="flex flex-col">
                    <CountUp enableScrollSpy={true}
                             end={520} duration={5}
                             suffix="+"
                             className="text-8xl font-bold"/>
                    <p>CLIENTES SATISFECHOS</p>
                </div>
                <div className="flex flex-col">

                    <CountUp enableScrollSpy={true}
                             end={230} duration={2}
                             suffix="+"
                             className="text-8xl font-bold"/>
                    <p>PROYECTOS EXITOSOS</p>
                </div>
            </div>
        </>
    );
}

export default CountUpDividerClient;