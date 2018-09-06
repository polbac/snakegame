import * as React from 'react';
const eightBit = require('8bit'); // only needed for NPM installs
const uniqid = require('uniqid');

type Image8BitProps = {
    src: string,
    squares: number
}

type Image8BitState = {
    canvasId: string;
    imageId: string;
}

export class Image8Bit extends React.Component<Image8BitProps, Image8BitState> {
    constructor(props: any) {
        super(props);
        this.state = {
            canvasId: `canvas-${uniqid()}`,
            imageId: `image-${uniqid()}`,
        }
    }
    
    createCanvas = () => {
        const { canvasId, imageId } = this.state;
        const { squares } = this.props;
        const image: any = document.getElementById(imageId);
        eightBit(document.getElementById(canvasId), image, squares);
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