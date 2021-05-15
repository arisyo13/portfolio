import React from 'react';

export interface SinglePost {
    title: string,
    slug: string,
    mainImage: {
        asset: {
            _id: number,
            url: string,
        },
        alt: string,
    },
}