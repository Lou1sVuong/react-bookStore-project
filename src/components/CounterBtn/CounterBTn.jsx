import React from 'react'
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/400.css'; // Specify weight
import '@fontsource/roboto/400-italic.css'; // Specify weight and style
import { VtmnQuantity } from '@vtmn/react';
import '@vtmn/icons/dist/vitamix/font/vitamix.css';

function CounterBTn() {
    return (
        <div>
            <VtmnQuantity
                id="quantity-story"
                min={0}
                onChange={function noRefCheck() { }}
                size="medium"
                step={1}
                value={1}
            />
        </div>
    )
}

export default CounterBTn
