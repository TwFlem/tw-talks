import React from 'react';
import Image from 'next/image'

export function HeadShotCard() {
    return (
            <div className="flex items-center text-center flex-col w-3/12 bg-background-light border-2 border-accent p-16">
                <Image
                    src="/headshot.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    className="rounded-full"
                /> 
                <p className="mb-3">Trenton Fleming</p>
                <div className="bg-primary w-1/4 h-px mb-3" />
                <p>Software Engineer</p>
            </div>
    )
}
