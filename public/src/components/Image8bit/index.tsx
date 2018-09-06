import * as React from 'react';
const eightBit = require('8bit'); // only needed for NPM installs

type Image8BitProps = {
    src: string
}

type Image8BitState = {
    canvasId: string;
    imageId: string;
}

export class Image8Bit extends React.Component<Image8BitProps, Image8BitState> {
    constructor(props: any) {
        super(props);
        this.state = {
            canvasId: 'canvasId',
            imageId: 'imageId',
        }
    }
    
    createCanvas = () => {
        const { canvasId, imageId } = this.state;
        const image: any = document.getElementById(imageId);
        eightBit(document.getElementById(canvasId), image, 20);
        image.style.display = 'none';
    }

    render(){
        const { canvasId, imageId } = this.state;
        const { src } = this.props;
        return (
            <div>
                <canvas id={ canvasId }></canvas>
                <img onLoad={ this.createCanvas } id={imageId} src={src} /> 
            </div>
        );
    }
}