import * as React from "react";

export interface IYoutubeVideoProps { src: string; verticalCenter: boolean; }

export interface IDimensions{
    width: number,
    height: number
};
export interface IYoutubeVideoState {
    dimensions: IDimensions
};

// 'IYoutubeVideoProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class YoutubeVideo extends React.Component<IYoutubeVideoProps, {}> {
    state: IYoutubeVideoState = {
        dimensions: null
    }
    container: HTMLIFrameElement;
    
    updateDimensions(){
        this.setState({
            dimensions: {
                width: this.container.offsetWidth,
                height: this.container.offsetHeight
            }
        }, ()=>{
            console.log(this.state.dimensions);
            let height = ((1080/1920)*window.innerWidth);
            this.container.style.height = ((window.innerHeight >= height)? height: window.innerHeight).toString() + "px";
            //this.container.style.position = "relative";
            //this.container.style.top = ((window.innerHeight - height)/2).toString() + "px";
        });
    }
    componentDidMount(){
        this.updateDimensions();
        window.addEventListener('resize', ()=>{this.updateDimensions()});
    }
    componentWillUnmount(){
        window.addEventListener('resize', ()=>{this.updateDimensions()});
    }

    render(){
        return <div className={this.props.verticalCenter? "vertical-center": ""}>
            <iframe ref={el=> (this.container = el)} className="d-block mx-auto" width="100%" src={"https://www.youtube-nocookie.com/embed/" + this.props.src + "?controls=0"} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }
}