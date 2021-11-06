import React from 'react'
import FadeIn from 'react-fade-in';
import Introduction from './Introduction';


export default function ContentPage() {
    return (
        <FadeIn>
            <div>
                <Introduction/>
            </div>
        </FadeIn>
    )
}
